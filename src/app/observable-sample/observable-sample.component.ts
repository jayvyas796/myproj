import { Component } from '@angular/core';
import { BehaviorSubject, concatWith, map, Observable, ReplaySubject, retry, Subject, take } from 'rxjs';

@Component({
  selector: 'app-observable-sample',
  templateUrl: './observable-sample.component.html',
  styleUrls: ['./observable-sample.component.css']
})
export class ObservableSampleComponent {
  observableData: Observable<string> | undefined;
  subjectData: Subject<string> | undefined;
  bsubjectData: BehaviorSubject<string> | undefined;
  rsubjectData: ReplaySubject<string> | undefined;



  constructor() {
    this.subjectData = new Subject<string>();
    this.bsubjectData = new BehaviorSubject<string>('test0');
    this.rsubjectData = new ReplaySubject<string>(2);
  }

  create() {
    /*this.observableData = new Observable<string>(ob=>{
      ob.next('test1');
      ob.next('test2');

      setInterval(() => {
        ob.next('test'+Math.random());
      }, 1000);

      setTimeout(() => {
        ob.complete();
      }, 10000);
    })*/


    // this.subjectData?.next('test1');
    // this.subjectData?.next('test2');

    // this.bsubjectData?.next('test1');
    // this.bsubjectData?.next('test2');

    this.rsubjectData?.next('1');
    this.rsubjectData?.next('2');
    this.rsubjectData?.next('3');
    this.rsubjectData?.next('4');


  }
  fetch1() {
    let ob = {
      next: (response: any) => {
        console.log('fetch 1 iteam=>' + response);
      },
      error: (err: any) => {
        console.log('error=>' + err);
      },
      complete: () => {
        console.log('Stream complete');
      }
    }

    //this.observableData?.subscribe(ob);
    //this.subjectData?.subscribe(ob);
    //this.bsubjectData?.subscribe(ob);

    this.rsubjectData?.subscribe(ob);
  }

  fetch2() {

    //this.observableData?.subscribe({
    //this.subjectData?.subscribe({
    // this.bsubjectData?.subscribe({
    this.rsubjectData?.subscribe({
      next: (response: any) => {
        console.log('fetch 2 iteam=>' + response);
      },
      error: (err: any) => {
        console.log('error=>' + err);
      },
      complete: () => {
        console.log('Stream complete');
      }
    })
  }

  operator() {
    this.observableData = this.observableData?.pipe(
      map(d => d.toUpperCase()),
      //take(3),
      retry(2)
    );
  }

}

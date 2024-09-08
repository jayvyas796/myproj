import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements AfterContentInit {
  currDate : Date;
  @ContentChild('h2')
  header:ElementRef | undefined;

  constructor(){
    this.currDate = new Date();

  }
  ngAfterContentInit(): void {
    console.log('header > ',this.header);
    if(this.header!=null){
      this.header.nativeElement.innerText = this.header.nativeElement.innerText + '. Thank you.';
    }
  }
}

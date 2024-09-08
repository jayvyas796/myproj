import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
  @Input('customer-list')
  customer:Customer[];

  @Input('cname')
  cname:string|undefined;

  constructor(private cdr:ChangeDetectorRef){
    this.customer=[];
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes trigger> ', changes);
  }
  refresh(){
    this.cdr.markForCheck();
  }
}

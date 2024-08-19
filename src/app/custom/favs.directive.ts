import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavs]'
})
export class FavsDirective {

  private isLike:boolean = true;

  @Input('appFavs')
  color:string|undefined;

  constructor(private ele:ElementRef) {
    console.log(this.ele.nativeElement);
    
    this.ele.nativeElement.style.color = this.color;
    this.update();
   }

   @HostListener('click')
   onclick(){
    this.update()
   }

   update(){
    this.isLike = !this.isLike;

    if(this.isLike){
      this.ele.nativeElement.style.color = this.color;
      this.ele.nativeElement.value = "Unlike";
    }
    else{
      this.ele.nativeElement.style.color = this.color;
      this.ele.nativeElement.value="Like";

    }
   }
}

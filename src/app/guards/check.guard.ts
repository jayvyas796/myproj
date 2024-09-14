import { CanDeactivateFn } from '@angular/router';
import { ProductModelDrivenComponent } from '../product/product-model-driven/product-model-driven.component';

export interface ICanDeactivateClass{
  checkCanDeactivate():boolean;
}

export const checkGuard: CanDeactivateFn<ICanDeactivateClass> = (component, currentRoute, currentState, nextState) => {
  /*if(component.frm.valid){
    let confirmLeave = confirm('Do you want to leave the page by saving?');
    if(confirmLeave){
      component.saveProduct();
    }
  }*/
  return true;
  //return component.checkCanDeactivate();
};

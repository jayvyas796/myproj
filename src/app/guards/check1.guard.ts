import { CanActivateChildFn } from '@angular/router';

export const check1Guard: CanActivateChildFn = (childRoute, state) => {
  return false;
};

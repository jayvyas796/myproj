import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { PersonalComponent } from './pipe-sample/personal/personal.component';
import { EducationComponent } from './pipe-sample/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { ProductTemplateDrivenComponent } from './product/product-template-driven/product-template-driven.component';
import { ProductModelDrivenComponent } from './product/product-model-driven/product-model-driven.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path: "databinding", component: DatabindingComponent },
  { path: "dir/:id", component: DirectiveSampleComponent },
  {
    path: "pipe", component: PipeSampleComponent, children: [
      { path: "personal", component: PersonalComponent },
      { path: "education", component: EducationComponent }
    ]
  },
  { path: "datasharing", component: CustomerAddComponent },
  { path: "templatedriven", component: ProductTemplateDrivenComponent },
  { path: "reactive", component: ProductModelDrivenComponent },
  { path: "observable", component: ObservableSampleComponent },
  { path: "list", component: ProductListComponent },
  { path: 'adminhome', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'userhome', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'student', loadComponent: () => import('./student/student.component').then(c => c.StudentComponent) },
  { path: '**', component: DatabindingComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

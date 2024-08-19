import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';

const routes: Routes = [
  {path:"databinding",component:DatabindingComponent},
  {path:"dir/abc",component:DirectiveSampleComponent},
  {path:"pipe",component:PipeSampleComponent},
  {path:'**',component:DatabindingComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

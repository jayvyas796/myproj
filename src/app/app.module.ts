import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { FavsDirective } from './custom/favs.directive';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { MypipePipe } from './custom/mypipe.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveSampleComponent,
    FavsDirective,
    PipeSampleComponent,
    MypipePipe,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

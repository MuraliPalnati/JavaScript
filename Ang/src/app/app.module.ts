import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustPipe} from './Custom/cp.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {PageNotFoundComponent} from './Others/pagenotfound.component';
import {HomeComponent} from './Others/home.component';
import { CustomDirective } from './Others/custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustPipe,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CreateOrEditUserComponent } from './components/create-or-edit-user/create-or-edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateOrEditUserComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

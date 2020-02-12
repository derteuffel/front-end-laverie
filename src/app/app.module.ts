import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBoissonComponent } from './create-boisson/create-boisson.component';
import { BoissonDetailComponent } from './boisson-detail/boisson-detail.component';
import { BoissonListComponent } from './boisson-list/boisson-list.component';
import { SearchBoissonComponent } from './search-boisson/search-boisson.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { BoissonUpdateComponent } from './boisson-update/boisson-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBoissonListComponent } from './add-boisson-list/add-boisson-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBoissonComponent,
    BoissonDetailComponent,
    BoissonListComponent,
    SearchBoissonComponent,
    BoissonUpdateComponent,
    AddBoissonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

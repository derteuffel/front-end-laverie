import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoissonListComponent } from './boisson-list/boisson-list.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { BoissonUpdateComponent } from './boisson-update/boisson-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBoissonListComponent } from './add-boisson-list/add-boisson-list.component';
import { AjoutUpdateComponent } from './ajout-update/ajout-update.component';
import { FactureBoissonListComponent } from './facture-boisson-list/facture-boisson-list.component';
import { FactureBoissonDetailComponent } from './facture-boisson-detail/facture-boisson-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BoissonListComponent,
    BoissonUpdateComponent,
    AddBoissonListComponent,
    AjoutUpdateComponent,
    FactureBoissonListComponent,
    FactureBoissonDetailComponent
    
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
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

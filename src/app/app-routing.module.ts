import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoissonListComponent } from './boisson-list/boisson-list.component';
import { BoissonUpdateComponent } from './boisson-update/boisson-update.component';
import { AddBoissonListComponent } from './add-boisson-list/add-boisson-list.component';
import { AjoutUpdateComponent } from './ajout-update/ajout-update.component';
import { FactureBoissonListComponent } from './facture-boisson-list/facture-boisson-list.component';
import { FactureBoissonDetailComponent } from './facture-boisson-detail/facture-boisson-detail.component';


const routes: Routes = [
  {path: 'boissons', component: BoissonListComponent },
  {path: 'boisson-update', component: BoissonUpdateComponent},
  {path: 'add-boisson', component: AddBoissonListComponent},
  {path: 'ajout-update', component: AjoutUpdateComponent},
  {path: 'facture-boisson-list', component: FactureBoissonListComponent},
  {path: 'facture-boisson-detail', component: FactureBoissonDetailComponent},
  {path: '', redirectTo: '/facture-boisson-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

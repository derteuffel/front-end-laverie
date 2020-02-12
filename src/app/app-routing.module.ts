import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBoissonComponent } from './create-boisson/create-boisson.component';
import { BoissonDetailComponent } from './boisson-detail/boisson-detail.component';
import { BoissonListComponent } from './boisson-list/boisson-list.component';
import { SearchBoissonComponent } from './search-boisson/search-boisson.component';
import { BoissonUpdateComponent } from './boisson-update/boisson-update.component';
import { AddBoissonListComponent } from './add-boisson-list/add-boisson-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'boissons', pathMatch: 'full' },
  {path: 'boissons', component: BoissonListComponent },
  {path: 'add', component:CreateBoissonComponent },
  {path: 'findbytype', component: SearchBoissonComponent},
  {path: 'boisson-update', component: BoissonUpdateComponent},
  {path: 'add-boisson', component: AddBoissonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

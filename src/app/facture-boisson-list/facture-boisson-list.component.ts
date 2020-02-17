import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { FactureBoisson } from '../_models/facture-boisson';
import { FactureBoissonService } from '../_services/facture-boisson-service';

@Component({
  selector: 'app-facture-boisson-list',
  templateUrl: './facture-boisson-list.component.html',
  styleUrls: ['./facture-boisson-list.component.css']
})
export class FactureBoissonListComponent implements OnInit {

  facture: FactureBoisson =  new FactureBoisson();
  factures: Observable<FactureBoisson[]>;

  constructor(private services: FactureBoissonService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.factures = this.services.getAllBarFactures();
    console.log(this.factures);
  }

  onSubmit(){
    this.save();
  }

  save(){
    this.services.save(this.facture)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error)
    
    );
    this.facture = new FactureBoisson();
  }

  detailFacture(item: FactureBoisson): void{
    window.localStorage.removeItem("itemId");
    window.localStorage.setItem("itemId", item.id.toString());
    this.router.navigate(['facture-boisson-detail']);

  }

  deleteFacture(id: number): void{
    this.services.delete(id)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error));
  }
}

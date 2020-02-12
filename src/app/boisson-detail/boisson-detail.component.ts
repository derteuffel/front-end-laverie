import { Component, OnInit, Input } from '@angular/core';

import { BoissonService } from '../_services/boisson.service';
import { Boisson } from '../_models/boisson';
import { BoissonListComponent } from '../boisson-list/boisson-list.component';


@Component({
  selector: 'app-boisson-detail',
  templateUrl: './boisson-detail.component.html',
  styleUrls: ['./boisson-detail.component.css']
})
export class BoissonDetailComponent implements OnInit {

  @Input() boisson: Boisson;

  constructor(private boissonService: BoissonService,
    private listComponent: BoissonListComponent) { }

  ngOnInit() {
  }

  updateBoisson() {
    this.boissonService.updateBoisson(this.boisson.id,
      {name: this.boisson.name, price: this.boisson.price, quantite: this.boisson.quantite, type: this.boisson.type})
      .subscribe(
        data => {
          console.log(data);
          this.boisson = data as Boisson;
        },
        error => console.log(error)
      );
  }

  update(id:number) {
    this.boissonService.updateBoisson(id,
      {name: this.boisson.name, price: this.boisson.price, quantite: this.boisson.quantite, type: this.boisson.type})
      .subscribe(
        data => {
          console.log(data);
          this.boisson = data as Boisson;
        },
        error => console.log(error)
      );
  }


  deleteBoisson(){
    this.boissonService.deleteBoisson(this.boisson.id)
    .subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }

  delete(id:number){
    this.boissonService.deleteBoisson(id)
    .subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }


}

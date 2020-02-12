import { Component, OnInit } from '@angular/core';
import { AjoutBoisson } from '../_models/ajout-boisson';
import { Boisson } from '../_models/boisson';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
 import { AjoutBoissonService } from '../_services/ajout-boisson.service';
 import { BoissonService } from '../_services/boisson.service';

@Component({
  selector: 'app-add-boisson-list',
  templateUrl: './add-boisson-list.component.html',
  styleUrls: ['./add-boisson-list.component.css']
})
export class AddBoissonListComponent implements OnInit {
  ajoutBoisson: AjoutBoisson = new AjoutBoisson();

  ajouts:Observable<AjoutBoisson[]>;
  id:number;
  boisson: Observable<Boisson>;


  constructor(private ajoutsService: AjoutBoissonService,
    private router: Router,
    private boissonService: BoissonService) { }

  ngOnInit() {
    this.id = +window.localStorage.getItem("addBoissonId");
    this.reloadData();
    this.boisson = this.boissonService.getBoisson(this.id);
    console.log(this.id);

  }

  reloadData(){
    this.ajouts = this.ajoutsService.getAllAddsByBoisson(this.id);
    console.log(this.ajouts);
    console.log(this.id);
  }

  save(){
    this.ajoutsService.createAdds(this.ajoutBoisson,this.id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
    this.ajoutBoisson = new AjoutBoisson();
  }

  onSubmit(){
    this.save();
  }

}

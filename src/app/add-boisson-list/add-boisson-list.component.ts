import { Component, OnInit } from '@angular/core';
import { Ajout } from '../_models/ajout';
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
  ajoutBoisson: Ajout = new Ajout();

  ajouts:Observable<Ajout[]>;
  id:number;
  boisson: Observable<any>;


  constructor(private ajoutsService: AjoutBoissonService,
    private router: Router,
    private boissonService: BoissonService) { }

  ngOnInit() {
    this.id = +window.localStorage.getItem("addBoissonId");
    this.reloadData();
    this.boisson = this.boissonService.getBoisson(this.id);

  }

  reloadData(){
    this.ajouts = this.ajoutsService.getAllAddsByBoisson(this.id);
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
    this.ajoutBoisson = new Ajout();
  }

  onSubmit(){
    this.save();
  }

  editAjout(ajout: Ajout): void{

    window.localStorage.removeItem("editId");
    window.localStorage.removeItem("boissonId");

    window.localStorage.setItem("editId", ajout.id.toString());
    window.localStorage.setItem("boissonId", this.id.toString());
    this.router.navigate(['ajout-update']);
  }

}

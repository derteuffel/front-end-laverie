import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ajout } from '../_models/ajout';
import { AjoutBoissonService } from '../_services/ajout-boisson.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ajout-update',
  templateUrl: './ajout-update.component.html',
  styleUrls: ['./ajout-update.component.css']
})
export class AjoutUpdateComponent implements OnInit {

  ajouts: Observable<Ajout[]>;
  id: number;
  boissonId: number;
  ajout: Ajout;

  constructor(private router: Router,
    private services: AjoutBoissonService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.ajout = new Ajout();
    this.id = +window.localStorage.getItem("editId");
    this.services.getOne(this.id)
      .subscribe(data => {
        console.log(data)
        this.ajout = data;
      },
      error => console.log(error)
      );
      
  }

  editAjout() {
    this.services.updateBoisson(this.id, this.ajout)
    .subscribe(data => console.log(data), error => console.log(error));
    this.ajout = new Ajout();
    this.router.navigate(['add-boisson']);
    }

  onSubmit(){
    this.editAjout();
  }

  cancel(){
      this.router.navigate(['add-boisson']);
  }

}

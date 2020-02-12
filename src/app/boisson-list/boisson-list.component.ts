import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

import { BoissonService } from '../_services/boisson.service';
import { Boisson } from '../_models/boisson';
@Component({
  selector: 'app-boisson-list',
  templateUrl: './boisson-list.component.html',
  styleUrls: ['./boisson-list.component.css']
})
export class BoissonListComponent implements OnInit {

  boisson: Boisson = new Boisson();
  submitted = false;
  boissons: Observable<Boisson[]>;
  
  constructor(private boissonService: BoissonService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.boissons = this.boissonService.getBoissonList();
  }


  delete(id: number) {
    this.boissonService.deleteBoisson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  save(){
    this.boissonService.createBoisson(this.boisson)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
    this.boisson = new Boisson();
  }

  editBoisson(boisson: Boisson): void{

    window.localStorage.removeItem("editBoissonId");
    window.localStorage.setItem("editBoissonId", boisson.id.toString());
    this.router.navigate(['boisson-update']);
  }

  onSubmit(){
    this.save();
  }

  addBoisson(boisson: Boisson): void{
    window.localStorage.removeItem("addBoissonId");
    window.localStorage.setItem("addBoissonId", boisson.id.toString());
    console.log(boisson.id);

    this.router.navigate(['add-boisson'])
  }
  


}

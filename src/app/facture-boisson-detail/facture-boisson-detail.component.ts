import { Component, OnInit } from '@angular/core';
import { FactureBoisson } from '../_models/facture-boisson';
import { Router } from '@angular/router';
import { FactureBoissonService } from '../_services/facture-boisson-service';
import { Observable } from 'rxjs';
import { Article } from '../_models/article';
import { ArticleService } from '../_services/articles.service';
import { Boisson } from '../_models/boisson';
import { FactureBoissonModalComponent } from '../facture-boisson-modal/facture-boisson-modal.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-facture-boisson-detail',
  templateUrl: './facture-boisson-detail.component.html',
  styleUrls: ['./facture-boisson-detail.component.css']
})
export class FactureBoissonDetailComponent implements OnInit {

  id: number;
  facture: FactureBoisson;
  articles: Observable<Article[]>;



  constructor(private router: Router,
    private services: FactureBoissonService,
    private articleService: ArticleService,
    private matDialog: MatDialog) { }

  ngOnInit() {
    this.facture = new FactureBoisson();
    this.id = +window.localStorage.getItem("itemId");
    this.reloadData(this.id);
    this.services.getOne(this.id)
      .subscribe(data => {
        console.log(data);
        this.facture=data;
      }, error => console.log(error)  
      );
  }

  reloadData(id:number){
    this.articles = this.articleService.getAllByfacture(id);
  }

  addItem(id: number){
    this.articleService.addItem(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData(this.id);
      }, error => console.log(error)
      );
  }

  removeItem(id: number){
    this.articleService.removeItem(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData(this.id);
      }, error => console.log(error)
      );
  }

  

  openModal() {
    window.localStorage.removeItem("facId");
    window.localStorage.setItem("facId", this.facture.id.toString());
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "facture-boisson-modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(FactureBoissonModalComponent, dialogConfig);
  }
}

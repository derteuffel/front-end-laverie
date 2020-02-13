import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Boisson } from '../_models/boisson';
import { Article } from '../_models/article';
import { BoissonService } from '../_services/boisson.service';
import { ArticleService } from '../_services/articles.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-facture-boisson-modal',
  templateUrl: './facture-boisson-modal.component.html',
  styleUrls: ['./facture-boisson-modal.component.css']
})
export class FactureBoissonModalComponent implements OnInit {

  boisson: Boisson;
  id:number;
  boissons: Observable<Boisson[]>;
  active=false;
  article: Article = new Article();

  constructor(public dialogRef: MatDialogRef<FactureBoissonModalComponent>,
    private boissonService: BoissonService,
    private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {

    this.id = +window.localStorage.getItem("facId");

    this.article = new Article();
    this.boissons = this.boissonService.getBoissonList();

  }

   // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

  onSubmit(){
    this.add();  
    }

    add(){
      this.articleService.add(this.id,this.article)
      .subscribe(data => {
        console.log(data);
        this.closeModal();
      }, error => console.log(error));

      this.router.navigate(['facture-boisson-detail'])
    }
}

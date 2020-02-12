import { Component, OnInit } from '@angular/core';
import { Boisson } from '../_models/boisson';
import { BoissonService } from '../_services/boisson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-boisson-update',
  templateUrl: './boisson-update.component.html',
  styleUrls: ['./boisson-update.component.css']
})
export class BoissonUpdateComponent implements OnInit {

  id: number;
  boisson: Boisson;
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private boissonService: BoissonService) { }

  ngOnInit() {

    this.boisson = new Boisson();
    this.id = +window.localStorage.getItem("editBoissonId");

    this.boissonService.getBoisson(this.id)
      .subscribe(data => {
        console.log(data)
        this.boisson = data;
      },
      error => console.log(error)
      );
  }

  updateBoisson(){
    this.boissonService.updateBoisson(this.id, this.boisson)
    .subscribe(data => console.log(data), error => console.log(error));
    this.boisson = new Boisson();
    this.router.navigate(['boissons']);
    }

  onSubmit(){
    this.updateBoisson();
  }

}

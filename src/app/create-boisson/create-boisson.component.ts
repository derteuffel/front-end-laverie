import { Component, OnInit } from '@angular/core';
import { Boisson } from '../_models/boisson';
import { BoissonService } from '../_services/boisson.service';

@Component({
  selector: 'app-create-boisson',
  templateUrl: './create-boisson.component.html',
  styleUrls: ['./create-boisson.component.css']
})
export class CreateBoissonComponent implements OnInit {

  boisson: Boisson = new Boisson();
  submited = false;
  constructor(private boissonService: BoissonService) { }


  newBoisson(): void {
    this.submited = false;
    this.boisson = new Boisson();
  }

  ngOnInit() {
  }

  save(){
    this.boissonService.createBoisson(this.boisson)
    .subscribe(
      data => {
        console.log(data);
        this.submited = true;
      },
      error => console.log(error)
    );
    this.boisson = new Boisson();
  }

  onSubmit(){
    this.save();
  }

}

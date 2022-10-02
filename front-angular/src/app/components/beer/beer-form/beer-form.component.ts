import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BeerService } from 'src/app/services/beer.service';
import { Beer } from 'src/app/models/beer.model';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit,OnDestroy  {

  beerForm!: FormGroup;
  beer!: Beer;
  isAddBeer = true;

  constructor(private formBuilder: FormBuilder,
              private beerService: BeerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.isAddBeer = !id || this.activatedRoute.snapshot.url[0].path === 'beer-list'

    this.beerService.getSingleBeer(id).subscribe(
      (beer: Beer) => {
        this.beer = beer;
        if(!this.isAddBeer) 
          this.initBeerFormUpdate(); 
        else
          this.initBeerFormAdd();
      }
    );
  }

  /**
   * Update form beer
   */
   initBeerFormUpdate(): void {
    this.beerForm = this.formBuilder.group({
      marque : [this.beer.marque,Validators.required],
      prix : [this.beer.prix,Validators.required],
      type : [this.beer.type,Validators.required]
    });
  }

    /**
   * Add form beer
   */
   initBeerFormAdd(): void {
    this.beerForm = this.formBuilder.group({
      marque : ['',Validators.required],
      prix : ['',Validators.required],
      type : ['',Validators.required]
    });
  }

  /**
   * Save the new beer
   * @param beer : beer to save
   */
  onSaveBeer(beer:Beer): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(this.isAddBeer){

      //Object beer creation
      const marque = this.beerForm.get('marque')?.value;
      const prix = this.beerForm.get('prix')?.value;
      const type = this.beerForm.get('type')?.value;

      const newBeer = new Beer(marque, prix, type);

      //Send object to database
      this.beerService.createBeer(newBeer).subscribe(
        beerAdded => {
          this.beerService.navigateToBeerList();
        }
      )
    } else {
      beer.id = id;
      beer.marque = this.beerForm.get('marque')?.value;
      beer.prix = this.beerForm.get('prix')?.value;
      beer.type = this.beerForm.get('type')?.value;

      this.beerService.updateBeer(id, beer).subscribe(
        beerUpdated => {
          this.beerService.navigateToBeerList();
        }
      );
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroyCalled')
  }


}

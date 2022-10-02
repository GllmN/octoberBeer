import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Beer } from 'src/app/models/beer.model';
import { Router } from "@angular/router";
import { Type } from 'src/app/models/type.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {

  beers: Beer[]=[];
  beersSubscription!: Subscription;

  constructor(private beerService: BeerService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.beersSubscription = this.beerService
      .getAll()
      .subscribe({
        next: (data) => {
          this.beers = data;
          console.log(data);
        },
          error: (e) => console.error(e)
      });
  }

  /**
   * Delete the beer from list
   * @param beer object
   */
  onCreateNewBeer(){
    this.router.navigate(['/beer-form']);
  }

  /**
   * Delete the beer from list
   * @param beer object
   */
  onDeleteBeer(beer: Beer) {
    if(confirm("Voulez vous supprimer la biere suivante : ' " + beer.marque + "', (ID : " + beer.id + ")")) {
      this.beerService.delete(beer);
    }
  }

  ngOnDestroy() {
    console.log('ngDestroy called')
    this.beersSubscription.unsubscribe();
  }
}

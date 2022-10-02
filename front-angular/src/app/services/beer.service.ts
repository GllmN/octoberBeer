import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Beer } from '../models/beer.model';

const baseUrl = 'http://localhost:8080/api/beers'

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient,
              private router: Router) { }

  /**
  * Get list all beer filled out
  */
  getAll(): Observable<Beer[]> {
    console.log(this.http.get<Beer[]>(baseUrl))
    return this.http.get<Beer[]>(baseUrl);
  }

  /**
  * Get a single beer
  *
  */
  getSingleBeer(id: any): Observable<Beer> {
    return this.http.get<Beer>(`${baseUrl}/${id}`);
  }

  /**
  * Create a beer
  * @param beer: object of beer
  */
  createBeer(data: any){
    return this.http.post(baseUrl, data);
  }

  /**
  * Updtate a beer
  * @param beer: object of beer
  * @param id: id of beer
  */
  updateBeer(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  /**
  * Delete a beer
  @param beer: object of beer
  */
  deleteBeer(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  /**
   * Navigate to beer list
   */
  navigateToBeerList(): void {
    this.router.navigate(['/beer-list']);
  }


}


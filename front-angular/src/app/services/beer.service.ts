import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model';

const baseUrl = 'http://localhost:8080/api/beers'

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

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
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  /**
  * Delete a beer
  @param beer: object of beer
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  /**
   * Navigate to book update
   * @param id: id of the screen to edit
   */
  // navigateToBookDetail(id: string){
  //   this.router.navigate(['/book-detail' , id]);
  // }

}


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = 'http://localhost:8080/animals';
  private SERVER_POST_URL = 'http://localhost:8080/createAdoption/';

  constructor(private httpClient: HttpClient) {
  }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }

  adoptAnimal(id) {
    return this.httpClient
      .post(this.SERVER_POST_URL + '?idUser=' + id + '&idAnimal=' + id, null);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) {
  }

// todo createDonation
  public save(donation) {
    return this.http.post('http://localhost:8080/createDonation/', donation);
  }
}

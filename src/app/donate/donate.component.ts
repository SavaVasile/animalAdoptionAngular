import {Component, OnInit} from '@angular/core';
import {Donation} from '../donation';
import {DonationService} from '../donation.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donation: Donation = new Donation(0, '', '');

  constructor(private service: DonationService) {
  }

  ngOnInit() {
  }

  public addDonation() {
    this.service.save(this.donation).subscribe((data: any[]) => {
      this.donation = data;
      window.location.reload();
    });

  }

}

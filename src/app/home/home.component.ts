import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {AnimalService} from '../animal.service';
import {Animal} from '../animal';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animals: any = [];

  columsToDisplay = ['id', 'name', 'sex', 'description', 'adopt', 'edit', 'delete'];
  animal: Animal = new Animal('', 0, '', '', '', '');

  constructor(private apiService: ApiService, private service: AnimalService, private router: Router) {
  }

  ngOnInit() {
    this.getAnimals();
  }

  deleteAnimal(id: number) {
    this.service.deleteAnimal(id).subscribe();
    window.location.reload();
  }

  getAnimal(id) {
    this.service.getAnimal(id).subscribe();
  }

  adoptAnimal(id) {
    this.apiService.adoptAnimal(id).subscribe();
  }

  getAnimals() {
    this.apiService.get().subscribe((data: any[]) => {
      this.animals = data;
    });
  }



}

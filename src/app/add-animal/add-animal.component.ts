import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Animal} from '../animal';
import {AnimalService} from '../animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  animal: Animal = new Animal('', 0, '', '', '', '');

  constructor(private  service: AnimalService) {
  }

  ngOnInit() {
  }

  public addAnimal() {
    this.service.save(this.animal).subscribe((data: any[]) => {
      this.animal = data;
      window.location.reload();
    });

  }
}

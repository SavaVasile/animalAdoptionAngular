import {Component, OnInit} from '@angular/core';
import {AnimalService} from '../animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../animal';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  animal: Animal = new Animal('', 0, '', '', '', '');
  id: number;

  constructor(private route: ActivatedRoute, private service: AnimalService, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getAnimal(id).subscribe(data => (this.animal = data));
  }

  /*editAnimal( animal) {
    this.service.editAnimal( animal).subscribe();
  }*/

  getAnimal(id) {
    this.service.getAnimal(id).subscribe();
  }

  onSubmit() {
    this.service.editAnimal( this.animal).subscribe(data => (
      this.router.navigate(['/home'])
    ));
  }
}

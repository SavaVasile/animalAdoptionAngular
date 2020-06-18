import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }

  public getAnimals() {
    return this.http.get('http://localhost:8080/animals');
  }

  public getAnimal(id) {
    return this.http.get('http://localhost:8080/findAnimal/' + id);
  }

  public save(animal) {
    return this.http.post('http://localhost:8080/saveAnimal', animal);
  }

  editAnimal(animal) {
    return this.http.put('http://localhost:8080/updateAnimal/' + animal.id, animal);
  }

  deleteAnimal(id) {
    return this.http.delete('http://localhost:8080/deleteAnimal/' + id);
  }
}

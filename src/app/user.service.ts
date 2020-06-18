import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public get() {
    return this.http.get('http://localhost:8080/users');
  }
  public getUser(id) {
    return this.http.get('http://localhost:8080/findUser/' + id);
  }

  public save(user) {
    return this.http.post('http://localhost:8080/saveUser', user);
  }

  public delete(id) {
    return this.http.delete('http://localhost:8080/deleteUser/' + id);
  }
  editUser(user) {
    return this.http.put('http://localhost:8080/updateUser/' + user.id, user);
  }
}

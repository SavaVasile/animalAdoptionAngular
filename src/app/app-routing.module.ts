import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DonateComponent} from './donate/donate.component';
import {AddAnimalComponent} from './add-animal/add-animal.component';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditAnimalComponent} from './edit-animal/edit-animal.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'addAnimal', component: AddAnimalComponent},
  {path: 'editAnimal/:id', component: EditAnimalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'editUser/:id', component: EditUserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donate', component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

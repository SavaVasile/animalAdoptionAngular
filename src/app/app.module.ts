import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule, MatTableModule, MatPaginatorModule, MatDividerModule, MatSidenavModule
} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { DonateComponent } from './donate/donate.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import {AnimalService} from './animal.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdoptionComponent } from './adoption/adoption.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DonateComponent,
    AddAnimalComponent,
    UsersComponent,
    AddUserComponent,
    EditAnimalComponent,
    EditUserComponent,
    AdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

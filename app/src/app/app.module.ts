import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeadingComponent } from './leading/leading.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InfoProjectComponent } from './info-project/info-project.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeadingComponent,
    ProjectListComponent,
    NavbarComponent,
    ProjectComponent,
    RatingListComponent,
    EditProjectComponent,
    NewProjectComponent,
    InfoProjectComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'home', redirectTo: ''},
        {path: 'project/:name/edit', component: EditProjectComponent},
        {path: 'project/:name/info', component: InfoProjectComponent},
        {path: 'project/new', component: NewProjectComponent},
        {path: '**', component: NotFoundComponent}
      ]
    )
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }

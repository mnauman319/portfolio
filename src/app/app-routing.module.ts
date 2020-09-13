import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "home", component:HomeComponent },
  {path: "apps", component:ApplicationsComponent },
  {path: "aboutme", component:AboutmeComponent },
  {path: "**", component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

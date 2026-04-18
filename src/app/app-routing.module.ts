import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DetailsPageComponent } from './Components/details-page/details-page.component';


const routes: Routes = [

  {path: 'landing-page', component: LandingPageComponent},
   { path: 'details-page', component: DetailsPageComponent},
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

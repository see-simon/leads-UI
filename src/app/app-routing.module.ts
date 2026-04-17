import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { FormPageComponent } from './Components/form-page/form-page.component';

const routes: Routes = [

  {path: 'landing-page', component: LandingPageComponent},
   { path: 'details-page', component: DetailsPageComponent},
  {path: 'form-page', component: FormPageComponent },
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

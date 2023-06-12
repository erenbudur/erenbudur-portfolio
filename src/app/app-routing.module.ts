import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'intro', pathMatch: 'full'}
  // {path: 'home', component: HomeComponent}
  // ,{path: 'about', component: AboutComponent}
  // ,{path: 'projects', component: ProjectsComponent}
  // ,{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

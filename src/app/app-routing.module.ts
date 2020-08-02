import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'demo', component: DemoPageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

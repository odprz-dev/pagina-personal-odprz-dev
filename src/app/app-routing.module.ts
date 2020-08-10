import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data:{
    title:'Oscar Daniel Perez Espinoza (Developer)',
    description: 'Información personal acerca de las habilidades y experiencia del desarrollador Oscar Daniel Perez Espinoza',
    keywords: 'Oscar Daniel Perez, Oscar Daniel, Oscar Daniel Perez Espinoza, desarrollador de software net, desarrollador de software angular, perfil de',
    expires:'86400'

  } },
  {path: 'demo', component: DemoPageComponent, data:{
    title: 'Demo inyectando html title y metaTags dinamicamente'
  } },
  { path: '**', component: PageNotFoundComponent, data:{ title:'Oscar Daniel Perez Espinoza (Developer)'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

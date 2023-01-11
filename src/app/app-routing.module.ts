import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VisitTableComponent } from './visit-table/visit-table.component';
import { CreateVisitComponent } from './create-visit/create-visit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createvisit', component: CreateVisitComponent },
  { path: 'editvisit/:visitId', component: CreateVisitComponent },
  { path: 'visittable', component: VisitTableComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

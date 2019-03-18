import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '', loadChildren:'./home/home.module#HomeModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // declarations: [NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

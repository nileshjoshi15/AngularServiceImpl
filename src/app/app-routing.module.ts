import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildInfoComponent } from './buildInfo/build-info.component';

const routes: Routes = [
  { path: 'info', component: BuildInfoComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

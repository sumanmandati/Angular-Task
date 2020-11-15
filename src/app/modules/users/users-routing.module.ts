import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
//components
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

//components
import { ListingComponent } from './listing/listing.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  { path: '', component: ListingComponent, pathMatch: 'full' },
  { path: ':id', component: ViewComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [ListingComponent, ViewComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }

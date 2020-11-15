import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
// common
import {
  CanAuthActivate, CanLoginActivate
} from './common/service/auth.gaurd';

import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [CanLoginActivate],
    loadChildren: () => import('./public/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: '',
    canActivate: [CanAuthActivate],
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./modules/blogs/blogs.module').then((m) => m.BlogsModule)
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },

    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes, { useHash: false }), SharedModule],
  exports: [RouterModule],
  providers: [CanAuthActivate, CanLoginActivate
  ],
})
export class AppRoutingModule { }

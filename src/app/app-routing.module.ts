import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './shared/guards/route.guard';

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'donate', loadChildren: () => import('./donate/donate.module').then(m => m.DonateModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'user-management',canActivate:[RouteGuard], loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'guest-book', loadChildren: () => import('./guest-book/guest-book.module').then(m => m.GuestBookModule) },
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

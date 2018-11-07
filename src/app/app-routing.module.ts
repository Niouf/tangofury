import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  //{ path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'tango-videos', loadChildren: './lastvideos/lastvideos.module#LastvideosPageModule' },
  //{ path: 'modal-playlist', loadChildren: './modal-playlist/modal-playlist.module#ModalPlaylistPageModule' },
  //{ path: 'maestro:slug', loadChildren: './maestro/maestro.module#MaestroPageModule' },
  { path: 'maestro/:slug', loadChildren: './maestro/maestro.module#MaestroPageModule' },
  { path: 'tango-maestros', loadChildren: './maestro-list/maestro-list.module#MaestroListPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tango-selections', loadChildren: './allselections/allselections.module#AllselectionsPageModule' },
  { path: 'playlists', loadChildren: './playlist-list/playlist-list.module#PlaylistListPageModule' },
  { path: 'playlists/:userkey', loadChildren: './playlist-list/playlist-list.module#PlaylistListPageModule' },
  { path: 'playlist/:userkey/:key', loadChildren: './playlist/playlist.module#PlaylistPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'SignUp', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'ResetPassword', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'allselections', loadChildren: './allselections/allselections.module#AllselectionsPageModule' },
  //{ path: 'modal-maestro', loadChildren: './modal-maestro/modal-maestro.module#ModalMaestroPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

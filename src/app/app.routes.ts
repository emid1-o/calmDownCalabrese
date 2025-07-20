import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { MusicaslistComponent } from './components/musicas/musicaslist/musicaslist.component';
import { MusicasdetailsComponent } from './components/musicas/musicasdetails/musicasdetails.component';
import { ArtistaslistComponent } from './components/artistas/artistaslist/artistaslist.component';
import { ArtistasdetailsComponent } from './components/artistas/artistasdetails/artistasdetails.component';

export const routes: Routes = [

    {path:"", redirectTo: "login", pathMatch:"full"},
    {path:"login", component: LoginComponent},
    {path:"admin", component: PrincipalComponent, children:[
        {path:"musicas", component: MusicaslistComponent},
        {path:"musicas/new", component: MusicasdetailsComponent},
        {path:"musicas/edit/:id", component: MusicasdetailsComponent},
        {path:"artistas", component: ArtistaslistComponent},
        {path:"artistas/new", component: ArtistasdetailsComponent},
        {path:"artistas/edit/:id", component: ArtistasdetailsComponent}
    ]}
];

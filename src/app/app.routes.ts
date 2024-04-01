import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { customAuthentication } from './security/authentication';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutUsComponent } from './about-us/about-us.component';
 
export const myRouting: Routes = [
    {path: 'sign-up', component: RegisterComponent },
    {path: 'log-in', component: LoginComponent},
    {path: 'add-movie', component: AddMovieComponent},
    {path: 'edit-movie', component: EditMovieComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'movie-list', component: DashboardComponent, canActivate:[customAuthentication]}
]

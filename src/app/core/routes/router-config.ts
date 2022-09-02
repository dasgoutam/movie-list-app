import {Routes} from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MovieDetailsComponent } from 'src/app/pages/movie-details/movie-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'movie/:id',
        component: MovieDetailsComponent
    }
];

export default appRoutes
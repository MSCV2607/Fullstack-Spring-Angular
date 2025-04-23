import { Routes } from '@angular/router';
import { UserAppComponent } from './components/user-app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [

    //Cuando no se encuentra la ruta, redirige a user
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },

    //-------------------------------------------------------------------------------

    {
    path: 'users',
    component : UserComponent,
    },

    {
        path: 'users/create',
        component: UserFormComponent,
    },

    {
        path: 'users/edit/:id',
        component: UserFormComponent,
    }

];

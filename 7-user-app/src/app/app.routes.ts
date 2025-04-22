import { Routes } from '@angular/router';
import { UserAppComponent } from './components/user-app.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [

    //Cuando no se encuentra la ruta, redirige a user
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
    },

    //-------------------------------------------------------------------------------

    {
    path: 'user',
    component : UserAppComponent,
    },

    {
        path: 'user/create',
        component: UserFormComponent,
    },

    {
        path: 'user/edit/:id',
        component: UserFormComponent,
    }

];

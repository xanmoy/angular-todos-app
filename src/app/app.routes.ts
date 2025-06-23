import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home);
        }
    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/TodosComponent').then((m) => m.Todos);
        }
    }
];

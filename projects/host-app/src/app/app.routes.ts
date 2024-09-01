import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import {loadRemoteModule} from '@angular-architects/module-federation'


export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: HomeComponent },
    {path:'todo-list',  
        loadChildren: () => {
           return loadRemoteModule({
                remoteEntry: 'http://localhost:4300/remoteEntry.js',
                remoteName:'mfeApp',
                exposedModule: './TodoListModule'
            }).then((m)=>m.TodoListModule)

           // import("mfe-app/").then((m)=>m.TodoListModule)
        },
    }
];

export const  routeCompArr=[HomeComponent]

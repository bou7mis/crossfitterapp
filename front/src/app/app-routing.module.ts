import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {name: 'home-page'}
    },
    {
        path: 'timers',
        loadChildren: './timers/timers.module#TimersModule',
        data: {name: 'timers-page'}
    },
    {path: '**', component: NotFoundComponent, data: {name: 'not-found-page'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

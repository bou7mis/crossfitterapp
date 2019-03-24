import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimersComponent} from './timers.component';
import {TabataComponent} from './tabata/tabata.component';
import {CountdownComponent} from "./countdown/countdown.component";

const routes: Routes = [
    {
        path: '',
        component: TimersComponent,
        data: {name: 'timers-page'}
    },
    {
        path: 'intervals',
        component: TabataComponent,
        data: {name: 'intervals-timer-page'}
    },
    {
        path: 'countdown',
        component: CountdownComponent,
        data: {name: 'countdown-timer-page'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimersRoutingModule {
}

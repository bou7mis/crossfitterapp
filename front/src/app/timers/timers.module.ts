import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabataComponent} from './tabata/tabata.component';
import {TimersComponent} from './timers.component';
import {FormsModule} from '@angular/forms';
import {TimersRoutingModule} from "./timers-routing.module";
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
    declarations: [TabataComponent, TimersComponent, CountdownComponent],
    imports: [
        CommonModule,
        FormsModule,
        TimersRoutingModule
    ]
})
export class TimersModule {
}

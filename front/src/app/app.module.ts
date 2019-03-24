import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

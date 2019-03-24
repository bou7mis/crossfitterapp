import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'idiliz-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    private isBrowser = false;

    constructor(@Inject(PLATFORM_ID) private platformId, private router: Router) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        if (this.isBrowser) {
            // this.store.dispatch(new SetError(new FrontError(404, null, null, this.router.url)));
        }
    }

}

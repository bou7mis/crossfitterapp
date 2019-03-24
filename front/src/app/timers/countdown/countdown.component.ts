import {Component, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
    countdown: number;
    capTime: number;
    round: number;
    timerSubs: Subscription;

    constructor() {
        this.capTime = 60;
        this.round = 1;
    }

    ngOnInit() {

    }

    onStopCountDown() {
        this.timerSubs.unsubscribe();
        this.countdown = this.capTime;
    }

    onCountDown() {
        if (this.capTime) {
            this.timerSubs = timer(0, 1000)
                .subscribe((value: number) => {
                    this.countdown = this.capTime - value;
                    if (this.countdown <= 0) {
                        this.timerSubs.unsubscribe();
                    }
                });
        }
    }
}

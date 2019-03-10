import {Component, OnInit} from '@angular/core';
import {Subject, Subscription, timer} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Crossfitter App';
    countdown: number;
    workTime: number;
    restTime: number;
    capTime: number;
    round: number;
    hiit = {
        rounds: 2,
        work: 10,
        rest: 5,
        roundsLeftSubject: new Subject<number>()
    };
    timerSubs: Subscription;
    workSubs: Subscription;
    restSubs: Subscription;

    constructor() {
        this.capTime = 60;
        this.round = 1;
    }

    ngOnInit() {

        // load the hiit countdown
        this.hiit.roundsLeftSubject.subscribe((rounds: number) => {
            this.workoutTimer(rounds);
        });
    }

    onStopCountDown() {
        this.timerSubs.unsubscribe();
    }

    onCountDown() {
        if (this.capTime) {
            this.timerSubs = timer(200, 1000)
                .subscribe((value: number) => {
                    this.countdown = this.capTime - value;
                    if (this.countdown <= 0) {
                        this.timerSubs.unsubscribe();
                    }
                });
        }
    }

    onHiitCountDown() {
        if (this.hiit.rounds && this.hiit.work) {
            this.hiit.roundsLeftSubject.next(this.hiit.rounds);
        }
    }

    workoutTimer(roundCount: number) {
        this.workSubs = timer(200, 1000)
            .subscribe((value: number) => {
                this.workTime = this.hiit.work - value;
                if (this.workTime <= 0) {
                    this.workSubs.unsubscribe();
                    this.restTimer(roundCount);
                }
            });
    }

    restTimer(roundCount: number) {
        this.restSubs = timer(200, 1000)
            .subscribe((restValue: number) => {
                this.restTime = this.hiit.rest - restValue;
                if (this.restTime <= 0) {
                    this.restSubs.unsubscribe();
                    if (roundCount - 1 !== 0) {
                        this.hiit.roundsLeftSubject.next(roundCount - 1);
                    }
                }
            });
    }
}

import {Component, OnInit} from '@angular/core';
import {Subject, Subscription, timer} from "rxjs";

@Component({
    selector: 'app-tabata',
    templateUrl: './tabata.component.html',
    styleUrls: ['./tabata.component.scss']
})
export class TabataComponent implements OnInit {
    tabata = {
        rounds: 2,
        work: 10,
        rest: 5,
        roundsLeftSubject: new Subject<number>()
    };
    workTime: number;
    restTime: number;
    workSubs: Subscription;
    restSubs: Subscription;

    constructor() {
        console.log(this.tabata.rounds);
    }

    ngOnInit() {
        // load the tabata countdown
        this.tabata.roundsLeftSubject.subscribe((rounds: number) => {
            if (rounds) {
                this.workTimer(rounds);
            }

        });
    }

    onTabataTimer() {
        if (this.tabata.rounds && this.tabata.work) {
            this.tabata.roundsLeftSubject.next(this.tabata.rounds);
        }
    }

    workTimer(roundCount: number) {
        this.workSubs = timer(50, 1000)
            .subscribe((value: number) => {
                this.workTime = this.tabata.work - value;
                if (this.workTime <= 0) {
                    this.workSubs.unsubscribe();
                    this.restTimer(roundCount);
                }
            });
    }

    restTimer(roundCount: number) {
        this.restSubs = timer(50, 1000)
            .subscribe((restValue: number) => {
                this.restTime = this.tabata.rest - restValue;
                if (this.restTime <= 0) {
                    this.restSubs.unsubscribe();
                    if (roundCount !== 0) {
                        this.tabata.roundsLeftSubject.next(roundCount - 1);
                    }
                }
            });
    }
}

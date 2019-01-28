import { Injectable, Input, EventEmitter, Output } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    constructor() { }

    @Input()
    public timerStatus: boolean;

    @Output()
    public timerState: EventEmitter<string> = new EventEmitter<string>();

    private seconds: number = 0;
    private min: number = 0;
    private hour: number = 0;
    private disSec: string;//dis = display
    private disMin: string;//dis = display
    private disHour: string;//dis = display
    private secInterval;

    public startInterval() {

        this.secInterval = setInterval(() => {
            if (this.seconds < 59) {
                this.seconds++;
            } else if (this.seconds == 59) {
                this.seconds = 0;
                if (this.min < 59) {
                    this.min++;
                } else if (this.min == 59) {
                    this.min = 0;
                    this.hour++;
                }
            }
            this.timerState.emit(this.getTimerToString());
        }, 1000);

    }

    public stopTimer():void {
        clearInterval(this.secInterval);        
        this.timerState.emit(this.getTimerToString());

    }

    //reset timer value as a string
    private getTimerToString():string {
        if (this.seconds < 10) {
            this.disSec = "0" + String(this.seconds);
        } else {
            this.disSec = String(this.seconds);
        }

        if (this.min < 10) {
            this.disMin = "0" + String(this.min);
        } else {
            this.disMin = String(this.min);
        }

        if (this.hour < 10) {
            this.disHour = "0" + String(this.hour);
        } else {
            this.disHour = String(this.hour);
        }
        return this.disHour + ":" + this.disMin + ":" + this.disSec 
    }

}

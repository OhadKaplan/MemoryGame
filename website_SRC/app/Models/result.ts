import { Time } from "@angular/common";

export class Result{
    constructor(
        public id?: number,
        public player?: number,
        public user?: string,
        public duration?: string,
        public takenDate?: Date,
        public steps?: number
    ){};
    
}

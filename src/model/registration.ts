import { User } from "./user";
import { Event } from "./event";

export class Registration {
    public registrationDate: Date;

    constructor(
        public user: User, 
        public event: Event
    ) {
        this.registrationDate = new Date();
    }
}
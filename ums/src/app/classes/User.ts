import { UserInterface } from "../interfaces/user";

export class User implements UserInterface {
    id : number;
    name : string;
    lastname : string;
    email : string;
    fiscalcode : string;
    phone : number;
    province : string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.fiscalcode = '';
        this.lastname = '';
        this.phone = 0;
        this.province = '';
    }
}
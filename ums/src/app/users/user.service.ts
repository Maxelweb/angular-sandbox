import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
    getUsers() {
        return  [
            {
                name: "Mario",
                lastname: "Rossi",
                email: "mariorossi@email.it",
                fiscalcode: "F192393FF83493",
                province: "PD",
                phone: "13939404"
            },
            {
                name: "Mario2",
                lastname: "Rossi2",
                email: "mariorossi2@email.it",
                fiscalcode: "C192393FF83493",
                province: "PD",
                phone: "13939404"
            },
            {
                name: "Mario3",
                lastname: "Rossi3",
                email: "mariorossi3@email.it",
                fiscalcode: "A192393FF83493",
                province: "VE",
                phone: "13939404"
            },
            {
                name: "Mario4",
                lastname: "Rossi4",
                email: "mariorossi4@email.it",
                fiscalcode: "B192393FF83493",
                province: "PD",
                phone: "13939404"
            },
        ]
    }
}
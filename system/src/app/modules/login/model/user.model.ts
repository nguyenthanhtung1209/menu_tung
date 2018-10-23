import { Injectable } from '@angular/core';

export class User {
    ID: number;
    FirstName: string;
    LastName: string;
}

let user : User = {
    ID: 1,
    FirstName: "Phạm",
    LastName: "Hữu Toàn",
};

@Injectable()
export class Service {
    getUser() : User {
        return user;
    }

    getPositions() : string[] {
        return []
    }

    checkLogin(username,password){
        console.log(username);
    }
}
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class UserService{

    onShowDetailsClicked = new EventEmitter<{name:string,job:string,gender:string,country:string,age:number}>();

    users=[
        {name:'John',job:'Teacher',gender:'Male',country:'USA',age:32},
        {name:'Sam',job:'Designer',gender:'Male',country:'UK',age:34},
        {name:'Rani',job:'Developer',gender:'Female',country:'India',age:45},
    ]

    showUserDetails(user:{name:string,job:string,gender:string,country:string,age:number}){
        this.onShowDetailsClicked.emit(user);
        console.log(this.onShowDetailsClicked)

    }
}
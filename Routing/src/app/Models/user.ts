export class User {
    id:number;
    name:string;
    username:string;
    password:string;

    constructor(id:number,name:string,username:string,password:string){
        this.id = id;
        this.name = name;
        this.password = password;
        this.username = username;
    }
}
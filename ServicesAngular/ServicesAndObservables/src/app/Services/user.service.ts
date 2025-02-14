export class UserService{
    users=[
        {name:'John',status:'active'},
        {name:'Sam',status:'inactive'},
        {name:'Sani',status:'active'}
    ]

    addNewUser(name:string,status:string){
        this.users.push({name:name,status:status})
    }
}
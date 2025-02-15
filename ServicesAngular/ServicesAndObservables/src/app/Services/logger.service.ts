export class LoggerService{

    logMessage(name:string,status:string){
        console.log(`A new user with username ${name} and with status ${status} has been added`)
    }
}
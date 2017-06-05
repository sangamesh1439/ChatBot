import {Injectable} from "@angular/core"
import {Http} from "@angular/http" //import http service
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable"
import "rxjs/add/operator/map"
// servivices can be injected into another component or services as well .

@Injectable ()

export class MessageService{
    
    constructor(private http:Http){   
    }

    sendReceiveMsg(msg:string): Observable<string>{
        //make http request here 
        return this.http.get("https://hemaapp.au-syd.mybluemix.net/sendmessage?msg=\""+msg+"\"").map(response=>{
            console.log("Resopnse : ", response["_body"])
            return response["_body"]})
        
    }
    /*
     sendReceiveMsg2(): Promise<string>{
        //make http request here 
        return this.http.get("https://jsonplaceholder.typicode.com/photos").toPromise().then(response=>{return response.toString()})
    }
    */
    
    
}
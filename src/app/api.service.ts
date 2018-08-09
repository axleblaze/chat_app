import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://chat.twilio.com/v2/Services"

  channel: string = "https://chat.twilio.com/v2/Services/IS7189b9283351490d99015f6c5472d636/Channels";

  message:string="https://chat.twilio.com/v2/Services/IS7189b9283351490d99015f6c5472d636/Channels/ CH39adafa6162f4ca8a4ce8b97f4bdf66a/Messages";
  
  
  
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    const body = new HttpParams().set('FriendlyName', 'Chatting App10');
    
    return this.http.post(this.url, body.toString(),httpOptions)
  
  } 
 
   addchannel(newchannel):Observable<any>{
  
  return this.http.post(this.channel,'UniqueName='+newchannel,httpOptions)
 }


 sendmessage(newmessage):Observable<any>{
  
  return this.http.post(this.message,"ChannelSid=IS95d0eae223f64224a34c8f424b2bab1b"
  +"&ServiceSid=IS95d0eae223f64224a34c8f424b2bab1b"
  +"&Body="+newmessage+"&From=Saurabh",httpOptions); 
 }
}






const  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUMyNWUwNWRkMjAyNTA0Y2NhZDNjYjdhYjUzMTdhMjY5Yzo3NTI2MDA1ZjJkNjliNDFiNDJlOGI5ZGJlZTExN2JiZA=='
  })
};

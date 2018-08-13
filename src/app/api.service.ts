import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  service: string = "https://chat.twilio.com/v2/Services"

  channel: string = "https://chat.twilio.com/v2/Services/IS997d04d07bcb49669f20ef512250a905/Channels";

  message: string = "https://chat.twilio.com/v2/Services/IS997d04d07bcb49669f20ef512250a905/Channels/CH08789ff307d14a5e99cae686c1b33b5f/Messages";

  idservice: string = "IS5b77315996ba4ff3bfbc0e5d66787905";

  idchannel: string = "CHac6a601657174294afe8ddd02c0ecdf4";

  
  group: any;
  
  constructor(private http: HttpClient) { }

  // canActivate()
  // {
  //   if(localStorage.getItem('id')==='')
  //   {
  //     return true;
  //   }else
  //   {
  //     false;
  //   }
  // }
  
 

  //creating a channel 
 
  // getData(): Observable<any> {
  //   const body = new HttpParams().set('FriendlyName', 'Chateo');

  //   return this.http.post(this.service, body.toString(), httpOptions)

  

  //this is used to add the channels
  
  addchannel(newchannel): Observable<any> {

    return this.http.post(this.channel, 'UniqueName=' + newchannel, httpOptions)
  }

  //this is used to display the channels
  showchannel(): Observable<any> {

    return this.http.get(this.channel, httpOptions).pipe(map(data => data));
  }

  //this is used to join channels
  memberjoin(member):Observable<any>{
   // console.log(member.links.members)
    const body =new HttpParams().set('ChannelSid',member.sid).set('ServiceSid',member.service_sid).set('Identity',localStorage.getItem('id'))
    return this.http.post(member.links.members,body.toString(),httpOptions);
  }

  messagechannel(link):Observable<any>{
  return this.http.get(link, httpOptions);
  
   }

searchchannel():Observable<any>{
  return this.http.get(this.channel,httpOptions).pipe(map(data=>data));
  //console.log(this.channel,"channels");
}

  //this is used to send messages
  sendmessage(newmessage,url): Observable<any> {
  // /  console.log(url,'ok')
    const body =new HttpParams().set('Body',newmessage).set('From',localStorage.getItem('email'))
   
    return this.http.post(url,body.toString(),  httpOptions)
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUMyNWUwNWRkMjAyNTA0Y2NhZDNjYjdhYjUzMTdhMjY5Yzo3NTI2MDA1ZjJkNjliNDFiNDJlOGI5ZGJlZTExN2JiZA=='
  })
};

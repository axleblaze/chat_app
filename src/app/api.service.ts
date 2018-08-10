import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  service: string = "https://chat.twilio.com/v2/Services"

  channel: string = "https://chat.twilio.com/v2/Services/IS5b77315996ba4ff3bfbc0e5d66787905/Channels";

  message: string = "https://chat.twilio.com/v2/Services/IS5b77315996ba4ff3bfbc0e5d66787905/Channels/CHac6a601657174294afe8ddd02c0ecdf4/Messages";

  idservice: string = "IS5b77315996ba4ff3bfbc0e5d66787905";

  idchannel: string = "CHac6a601657174294afe8ddd02c0ecdf4";


  group: any;

  constructor(private http: HttpClient) { }
  canActivate() {
    if (localStorage.getItem('id') === "117781316020699046034") {
      return true;
    }else{
      false;
    }
  }


  //creating a channel 

  getData(): Observable<any> {
    const body = new HttpParams().set('FriendlyName', 'Chateo');

    return this.http.post(this.service, body.toString(), httpOptions)

  }


  //this is used to add the channels

  addchannel(newchannel): Observable<any> {

    return this.http.post(this.channel, 'UniqueName=' + newchannel, httpOptions)
  }

  //this is used to display the channels

  showchannel(): Observable<any> {

    return this.http.get(this.channel, httpOptions).pipe(map(data => data));
  }

  //this is used to send messages

  sendmessage(newmessage): Observable<any> {

    return this.http.post(this.message, "ChannelSid=IS5b77315996ba4ff3bfbc0e5d66787905"
      + "&ServiceSid=CHac6a601657174294afe8ddd02c0ecdf4"
      + "&Body=" + newmessage + "&From=Saurabh", httpOptions);
  }


  showmessage(): Observable<any> {

    return this.http.get(this.message, httpOptions).pipe(map(data => data));
  }


  messageenter(myMessages): Observable<any> {
    return this.http.post("https://chat.twilio.com/v2/Services/" + this.idservice
      + "/Channels/" + this.idchannel + "/Messages", "ChannelSid=" + this.idchannel + "&ServiceSid=" + this.idservice + "&Body=" + myMessages, httpOptions);
    // console.log("ji" + myMessages);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUMyNWUwNWRkMjAyNTA0Y2NhZDNjYjdhYjUzMTdhMjY5Yzo3NTI2MDA1ZjJkNjliNDFiNDJlOGI5ZGJlZTExN2JiZA=='
  })
};

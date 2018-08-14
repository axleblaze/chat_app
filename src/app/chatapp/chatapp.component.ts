import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

id =localStorage.getItem('id');
name =localStorage.getItem('name');
email=localStorage.getItem('email');

  constructor(private route: Router, private service: ApiService) { }



  //these functions are called here so that it is called duing loading

  ngOnInit() {
   
    this.showChannelList();

  }



  //this function is creating a channel
  public channelinput = "";
  group;
  channelid;

  channel() {
    this.service.addchannel(this.channelinput).subscribe(res => {
      // console.log("allchannels" , res);
      this.group = res.unique_name;
      this.channelid = res.sid;
      console.log(res.sid)  // this is the id of the channel we are creating every time it is updated
      this.showChannelList();
    });
    
  }



  //this function displays the channels which have been made
  channelArray: any;
  messageArray: any;

  showChannelList() {
    this.service.showchannel().subscribe(res => {

      // console.log(res.channels,"sanjay");
      var len = res.channels.length;
      // for (let index = 0; index < len; index++) {
      //   this.channelArray[index] = res.channels[index].unique_name;
      //   // console.log( JSON.stringify(this.channelArray[index]));
      // }
      this.channelArray = res.channels;
    },
      err => {
        console.log(err);
      })
  
    }

 joinmember:any;
  //joinining channels
  join(member) {
    console.log(member)
    this.service.memberjoin(member).subscribe(res => {
      // console.log(res,"saurabh")
    this.joinmember=member;
    })
    
    //console.log(member)
  }




  //this function is creating msg
  public messageinput = "";
  public textmessage;
  msgapi: any;
  recmessage(msgchannel) {
    // console.log(msgchannel.links.messages,"msgchannel")
    this.mesurl = msgchannel
    console.log(this.mesurl)
    this.service.messagechannel(msgchannel.links.messages).subscribe(res => {
      console.log(msgchannel.links.messages, "api for message");
      this.messageArray = res.messages

      this.msgapi = msgchannel.links.messages;
      //console.log(this.messageArray, "msg")

   // this.join(this.joinmember);

    })
    
  }

  mesurl;
  message() {

    console.log(this.mesurl)
    this.service.sendmessage(this.messageinput, this.msgapi).subscribe(res => {
      // console.log(this.messageinput,"nbnbnnb")
      // console.log(res +"messagedata");
      this.textmessage = res.body;
      // call get msg apis from here 
      //this.recmessage(msgchannel);
      //console.log(res.body,"msg body"
       this.recmessage(this.mesurl)
    });
  }


  logout() {
    localStorage.clear();
    this.route.navigate(['/']);
  }

  channelarray=[];
  arrayLen;
  foundchannel: any = "";
  foundChannelId: any = "";
  channelInput:string;
  searchchannel() {
    this.service.searchchannel().subscribe(res => {
    //  console.log(res.channels.length, "goyal")
      
      for (let index = 0; index < res.channels.length; index++) {
        this.channelarray.push(res.channels[index].unique_name)
       
          if (this.channelarray[index] == this.channelInput) {
            console.log(this.channelInput,"found");
            this.foundchannel = this.channelInput;
            this.foundChannelId = res.channels[index].sid;
            break;
          }
          else {
            this.foundchannel = "channel not found";
          }
        }
      
    },
      err => {
        console.log();
      })
  }




}



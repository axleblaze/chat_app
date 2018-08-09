import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

  public channelinput = "";
  public messageinput = "";
  group;
 // textmessage;
  public textmessage;
  groupMsg;


  constructor(private route: Router, private service: ApiService) { }

  ngOnInit() {
    this.showChannelList();
   this.showMessageList();
   
  }

  channel() {
    this.service.addchannel(this.channelinput).subscribe(res => {
      console.log(res);
      this.group = res.unique_name;


    });
  }
  channelArray = [];
  showChannelList() {
    this.service.showchannel().subscribe(res => {
     
     // console.log(res.channels[0].unique_name);
      var len = res.channels.length;
      for (let index = 0; index < len; index++) {
        this.channelArray[index] = res.channels[index].unique_name;
       // console.log( JSON.stringify(this.channelArray[index]));
      }
    },
      err => {
        console.log(err);
      })
  }

  message() {
    this.service.sendmessage(this.messageinput).subscribe(res => {
      console.log(res);
      this.textmessage = res.body;
    });
  }



  messageArray = [];
  showMessageList() {
    this.service.showmessage().subscribe(res => {
     
      console.log(res.messages.length);
       length = res.messages.length;
       for (let index2 = 0; index2 <length; index2++) {
         this.messageArray[index2] = res.messages[index2].body;
        
       }
      // console.log(this.messageArray);
    },
      err => {
        console.log(err);
      });
  }

  // myMessage(){
  //   this.service.messageenter(this.textmessage).subscribe(res =>{
  //     this.groupMsg = res.body;
  //     console.log("hello"+ this.groupMsg);
    

  //   },
  //   err=>{
  //     console.log(err);
  //   }
  // )
  // }



}

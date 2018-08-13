import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {


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
    });
  }
  


  //this function displays the channels which have been made
  channelArray :any;
  messageArray:any;

  showChannelList() {
    this.service.showchannel().subscribe(res => {

      // console.log(res.channels,"sanjay");
      var len = res.channels.length;
      // for (let index = 0; index < len; index++) {
      //   this.channelArray[index] = res.channels[index].unique_name;
      //   // console.log( JSON.stringify(this.channelArray[index]));
      // }
      this.channelArray=res.channels;
    },
      err => {
        console.log(err);
      })
  }
  
  
  //joinining channels
  join(member){
    console.log(member)
this.service.memberjoin(member).subscribe(res=>{
 // console.log(res,"saurabh")
})
    //console.log(member)
  }




  //this function is creating msg
  public messageinput = "";
  public textmessage;
  msgapi:any;
  recmessage(msgchannel){
   // console.log(msgchannel.links.messages,"msgchannel")

   this.service.messagechannel(msgchannel.links.messages).subscribe(res =>{
       console.log(msgchannel.links.messages , "api for message");
       this.messageArray=res.messages
       
       this.msgapi=msgchannel.links.messages;
       //console.log(this.messageArray, "msg")


    })
  }


  message() {

    
    this.service.sendmessage(this.messageinput,this.msgapi).subscribe(res => {
    // console.log(this.messageinput,"nbnbnnb")
     // console.log(res +"messagedata");
      this.textmessage = res.body;
      
      //console.log(res.body,"msg body")
    });
  }


logout(){
  this.route.navigate(['/']);
}

  

  


}

 

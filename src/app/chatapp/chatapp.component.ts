import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

 public channelinput= "";
  public messageinput= "";
  
  constructor(private route:Router, private service:ApiService) { }

  ngOnInit() { }

  channel() {
    this.service.addchannel(this.channelinput).subscribe(res=>{
      console.log(res);
    });  
  }



  message() {
    this.service.sendmessage(this.messageinput).subscribe(res=>{
      console.log(res);
    });  
  }

}

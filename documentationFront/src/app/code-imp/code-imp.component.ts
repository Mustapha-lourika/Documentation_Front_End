import { Component, OnInit } from '@angular/core';
import {CodeImpsService} from '../code-imp.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-code-imp',
  templateUrl: './code-imp.component.html',
  styleUrls: ['./code-imp.component.css']
})
export class CodeImpComponent implements OnInit {
  widgets=[];
  greeting={};
  isAdmin;
  base64textString;
  constructor(private http:HttpClient,private router:Router,private codeImpSrvice:CodeImpsService ,private token:TokenStorageService) {

   }

  ngOnInit() {
   this.codeImpSrvice.getCode().subscribe(widge=>this.widgets=widge);
   this.isAdmin=this.token.getUser().roles.includes('ROLE_ADMIN');

  }

  onChang(id){

                this.router.navigate(["/changeCode",id]);


  }

  onUploadChange(evt){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}



_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
          console.log(this.base64textString);
  }

  onImageChange(id){
    this. codeImpSrvice.SaveImageChange(id,this.base64textString).subscribe(()=>{
      window.location.reload();

    });

  }

}

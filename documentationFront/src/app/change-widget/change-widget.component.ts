import { Component, OnInit } from '@angular/core';
import {CodeImpComponent} from '../code-imp/code-imp.component'
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeImpsService } from '../code-imp.service';

@Component({
  selector: 'app-change-widget',
  templateUrl: './change-widget.component.html',
  styleUrls: ['./change-widget.component.css']
})
export class ChangeWidgetComponent implements OnInit {
  widgetcode={};
  codeedit;

  private id;
  constructor(private route:Router,private router:ActivatedRoute,private codeImpsServie:CodeImpsService) { }

  ngOnInit() {
    this.id=+this.router.snapshot.params['id'];
    this.codeImpsServie.getCodeWidget(this.id).subscribe(data=>{this.widgetcode=data; this.codeedit=data.codewidget});
  }
  onValideChange(id,code){
    this.codeImpsServie.SaveCOdeChange(id,code).subscribe(()=>{
      this.route.navigate(['/widget'])
    });

  }

}

let s=1;
let ss;
ss="sls";

(<string>ss).bold

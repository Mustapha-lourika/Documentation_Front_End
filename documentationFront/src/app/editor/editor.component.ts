import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as ace from 'ace-builds'; // ace module ..
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-beautify';
import 'ace-builds/src-noconflict/ext-language_tools';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EditorService } from '../editor.service';
import { CodeVue } from '../codeVueInterface';
const THEME = 'ace/theme/monokai';
const LANG = 'ace/mode/xml'
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
   datae:string='';
   private editorBeautify;
    datas:CodeVue;

   @ViewChild('codeEditor',{static:true}) codeEditorElmRef: ElementRef;
    private codeEditor: ace.Ace.Editor;


  name = 'Set iframe source';
  url: string = "http://localhost:8787/karazal/index.jsp#search//smartorg/achat/demande/search/AllDemande//search";
  urlSafe: SafeResourceUrl;
  constructor(public domsanitizer:DomSanitizer,private http:HttpClient,private editeur:EditorService) { }

  ngOnInit() {
    this.urlSafe= this.domsanitizer.bypassSecurityTrustResourceUrl(this.url);
    const element = this.codeEditorElmRef.nativeElement;
    ace.require("ace/ext/language_tools");
    this.editorBeautify = ace.require("ace/ext/beautify");


        this.codeEditor = ace.edit(element);
        this.codeEditor.splitLine();
        this.codeEditor.setTheme(THEME);
        this.codeEditor.getSession().setMode(LANG);
        this.codeEditor.setShowFoldWidgets(true);
        this.beautifyContent();


  }

  private getCode() {
    const code = this.codeEditor.getValue();
    console.log(typeof code);
}
  public beautifyContent() {
    if (this.codeEditor && this.editorBeautify) {
       const session = this.codeEditor.getSession();
       this.editorBeautify.beautify(session);
    }
 }
   // missing propery on EditorOptions 'enableBasicAutocompletion' so this is a wolkaround still using ts
   private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
        highlightActiveLine: true,
        minLines: 14,
        maxLines: Infinity,
    };

    const extraEditorOptions = {
        enableBasicAutocompletion: true
    };
    const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
    return margedOptions;
}
get(){

  //console.log("test")
  this.datae=this.codeEditor.getValue();
  if(this.codeEditor.getValue().trim().length<1)
  {
    alert("text est vide");
}
else{
  const f=this.datae;
  console.log(f);
  this.http.post("http://localhost:8787/quercus/s.php"
  ,this.datae,)
  .subscribe(data =>     {
   console.log(data);
   });
   $('#frame').attr("src", $('#frame').attr("src"));
  }
}
getdata(){
 this.editeur.getCodeWidget().
 subscribe(data =>     {
    this.datas=data;

    const f=this.datas.data;
   console.log(f);
   this.codeEditor.setValue(f);
   });

}


}

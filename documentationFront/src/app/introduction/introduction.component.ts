import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  hhh=true;

  constructor(private userservice:UserService) {


  }

  ngOnInit() {

  }

}

$(document).ready(function () {

  $("#sidebar").mCustomScrollbar({
       theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#content_introduction').toggleClass('active');


      $('.collapse.in').toggleClass('in');
      // and also adjust aria-expanded attributes we use for the open/closed arrows
      // in our CSS
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});

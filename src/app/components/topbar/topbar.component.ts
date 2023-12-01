import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Input() public title: string;
  

  constructor( private router:Router){}

  navigateLogin(){
    this.router.navigate(['']);
  }
}

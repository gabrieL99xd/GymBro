import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TokenService } from './Services/Token/token.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('SideNav') SideNav!: MatSidenav;
  constructor(public tokenService : TokenService ) { }
}

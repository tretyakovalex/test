import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sideMenuActive = false;

  toggleSideMenu(): void {
    this.sideMenuActive = !this.sideMenuActive;
  }
}

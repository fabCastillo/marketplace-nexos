import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public navBarOpen: Boolean = false;
  showNavBar() {
    this.navBarOpen = !this.navBarOpen;
  }
}

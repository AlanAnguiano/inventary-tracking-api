import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-tracker';

  onRouterOutletActivate(event: any): void {
    this.title = event.title;
  }
}

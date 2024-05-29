import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  details: boolean = false;
  users: any = [{ id: 1, name: "Bini" }, { id: 2, name: "Babu" }]
  getDetails() {
    this.details = !this.details;
  }
}

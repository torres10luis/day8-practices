import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show = false;
  arrs: any[] = [];
  time: '';
  state: '';

  // getDetails() {
  //   this.show = false;
  //   this.pushArr();

  //   // this.show =!
  //   // console.log(this.getDetails);
  // }

  pushArr() {
    this.arrs.push({
      time: Date(),
      state: this.show,
    });
    console.log(this.arrs);

  }
}

import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasa';
  public imgOfTheDay: string = null;

  constructor(private myService: NasaService) {

  }

  ngOnInit() {
    this.myService.getImageOfTheDay().subscribe(
      (param: string) => {
        this.imgOfTheDay = param;
        console.log(this.imgOfTheDay);
      }
    )
  }
}

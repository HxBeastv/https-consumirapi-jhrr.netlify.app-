import { Component, OnInit } from '@angular/core';
import { DigimonesServices } from './digimones/digimones.service';
import { Digimones } from './digimones/digimones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Digimones: any;
  constructor(private digimon: DigimonesServices) { }
  ngOnInit() {
    this.digimon.getDigimones().subscribe(
      (r: any) => { this.Digimones = r; console.log(r); },
      (e: any) => { console.log(e); }
    );
  }
}

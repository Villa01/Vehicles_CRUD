import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interfaces/vehicles.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehiculos : Vehicle[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

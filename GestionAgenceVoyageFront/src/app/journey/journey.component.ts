import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { JourneyService } from '../services/journey.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  flights: Flight[];
  flight: Flight = new Flight();
  constructor(private journeyService: JourneyService) { }


  ngOnInit(): void {
    this.findAllFlight();
  }

  findAllFlight() {
    this.journeyService.findAllFlight().subscribe(data => { this.flights = data });
  }
  deleteFlight(id:number) {

    console.log("id="+id);
    this.journeyService.deleteFlight(id).subscribe(
      () => { this.findAllFlight() }
    );
  }
  saveFlight(){
    this.journeyService.saveFlight(this.flight).subscribe(()=>{this.findAllFlight();
    this.flight = new Flight();
    });
  }

}

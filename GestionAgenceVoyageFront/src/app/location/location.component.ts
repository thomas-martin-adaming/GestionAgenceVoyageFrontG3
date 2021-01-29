import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[];
  location: Location = new Location();

  constructor(private locationService: LocationService) { }


  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.locationService.findAll().subscribe(data => { this.locations = data });
  }

  delete(id:number) {
    console.log("id="+id);
    this.locationService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }

  save(){
    this.locationService.save(this.location).subscribe(()=>{this.findAll();
    this.location = new Location();
    });
  }
}

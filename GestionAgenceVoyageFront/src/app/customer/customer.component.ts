import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.findAllCustomer();
  }
  findAllCustomer() {
    this.customerService.findAllCustomer().subscribe(data => { this.customers = data });
  }
  deleteCustomer(id:number) {

    console.log("id="+id);
    this.customerService.deleteCustomer(id).subscribe(
      () => { this.findAllCustomer() }
    );
  }
  saveCustomer(){
    this.customerService.saveCustomer(this.customer).subscribe(()=>{this.findAllCustomer();
    this.customer = new Customer();
    });
  }

}

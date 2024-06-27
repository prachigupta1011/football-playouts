import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent implements OnInit {
  bitcoinData: any;

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    this.apiCallService.fetchData().subscribe(data => {
      this.bitcoinData = data;
    });
  }

  getCurrencies(bpi: any): any[] {
    return Object.keys(bpi).map(key => bpi[key]);
  }
}

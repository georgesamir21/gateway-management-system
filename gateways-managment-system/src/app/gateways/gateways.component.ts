import { GatewaysService } from './../api/gateways.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {

  constructor(
    private gatewaysService: GatewaysService
  ) { }

  ngOnInit(): void {
    this.gatewaysService.getAllGateways().subscribe(
      (res) => {
        const {data} = res;
        console.log(data);
      },
      e => console.log(e)
    )
  }

}

import { GatewaysService } from './../api/gateways.service';
import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../api/devices.service';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {

  constructor(
    private gatewaysService: GatewaysService,
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.gatewaysService.getAllGateways().subscribe(
      (res) => {
        const {data} = res;
        console.log(data);
      },
      e => console.log(e)
    )
    
    this.devicesService.getAlldevices().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { AppconfigService } from '../../services/appconfig.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { DataConfig } from '../../models/dataConfig';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ AppconfigService ]
})
export class HeaderComponent implements OnInit {

  public showChangeSession : boolean = false;
  public showChangeMenu : boolean = true;

  public data : DataConfig;

  constructor(
    private _appconfigService: AppconfigService
  ) { }

  ngOnInit(): void {
    this._appconfigService.getDeploymentConfig().subscribe(
      response => {
        console.log(response);
        this.data = response.informationEntity as DataConfig;
        console.log(this.data);
      },
      error => {
        let backendUrlAux = "http://sje00866.ute.fedex.com:8601/ccp-gdc/broker-engine-service";
        let backToCcpUrlAux = "http://uje00483.ute.fedex.com:7601/ccp-efs/?devId=597115";
        let logoutUrlAux = "http://dev.secure.fedex.com/wsso/logout.html";
        this.data = new DataConfig( backendUrlAux, logoutUrlAux,'597115', backToCcpUrlAux);
        console.log(this.data);
      }
    );
  }

  clickMenu(){
    this.showChangeSession = true;
    this.showChangeMenu = false;
  }

  clickSession(){
    this.showChangeSession = false;
    this.showChangeMenu = true;
  }

}

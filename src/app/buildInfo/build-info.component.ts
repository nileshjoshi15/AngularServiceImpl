import { Component, OnInit } from '@angular/core';
import { BuildInfoService } from './build-info.service';
import { IBuildInfo } from './buildInfo';

@Component({
  selector: 'app-build-info',
  templateUrl: './build-info.component.html',
  styleUrls: ['./build-info.component.css']
})
export class BuildInfoComponent implements OnInit {

  private buildInfo : string;

  constructor(private bInfoService: BuildInfoService) { }

  ngOnInit() {
      this.bInfoService.getBuildInfo().subscribe(
        info => this.buildInfo = JSON.stringify(info)
      );
  }

}

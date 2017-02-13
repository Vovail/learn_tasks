import {Component, OnInit} from '@angular/core';
import {CommonService} from "../shared/services/common.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private url: string = "common-info.json";
  private commonInfo: Object[];

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getData(this.url)
      .subscribe((data: any[]) => {
        this.commonInfo = data;
      })
  }

}

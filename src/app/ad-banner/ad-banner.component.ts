import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service'
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {
  ad;
  constructor(private adService:AdService) { 
    this.ad = this.adService.getAdds();
    let t = {a:1,b:2};


  }

  ngOnInit() {
  }

}
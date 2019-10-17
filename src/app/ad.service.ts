import { Injectable } from '@angular/core';
import { AdTemplateComponent } from './ad-template/ad-template.component';
@Injectable()
export class AdService {

  constructor() { }

  getAdds(){
    return [{component:AdTemplateComponent, data:{head:'1',body:'1'}},{component:AdTemplateComponent, data:{head:'2',body:'2'}}];
  }

}
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { AdTemplateComponent } from './ad-template/ad-template.component';

@Directive({
  selector: '[ad]'
})
export class AdHostDirective {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainer: ViewContainerRef) { 
   
  }

  @Input() set ad(adItem:{component:Type<any>, data:any}){
    console.log('adItem:',adItem);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    
    this.viewContainer.clear();
    let componentRef = this.viewContainer.createComponent(componentFactory);
    (<AdTemplateComponent>componentRef.instance).data = adItem.data;
  }

}
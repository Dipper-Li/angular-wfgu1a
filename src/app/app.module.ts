import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { HightlightDirective } from './hightlight.directive';
import { ColorChooseComponent } from './color-choose/color-choose.component';
import { UnlessDirective } from './unless.directive';
import { PrefixPipe } from './prefix.pipe';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AliasComponent } from './alias/alias.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AddHeroReactiveComponent } from './add-hero-reactive/add-hero-reactive.component';
import { QuestionComponent } from './question/question.component';
import { AdTemplateComponent } from './ad-template/ad-template.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdHostDirective } from './ad-host.directive';
import { AdService } from './ad.service';
//import { PartaModule } from './parta/parta.module';
import { PartbModule } from './partb/partb.module';
import { TestService } from './service/test.service';
import { PartcComponent } from './partc/partc.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ReactiveFormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    PartbModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HightlightDirective,
    ColorChooseComponent,
    UnlessDirective,
    PrefixPipe,
    RegisterComponent,
    AliasComponent,
    AddHeroComponent,
    AddHeroReactiveComponent,
    QuestionComponent,
    AdTemplateComponent,
    AdBannerComponent,
    AdHostDirective,
    PartcComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AdService,TestService],
  entryComponents: [AdTemplateComponent],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
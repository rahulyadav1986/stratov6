import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CountdownModule } from 'ngx-countdown';
import { 
	IgxPieChartModule,
	IgxLegendModule,
	IgxItemLegendModule
 } from "igniteui-angular-charts";
import { AppServicesService } from './app-services/app-services.service';

import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';


import { NodeNetworkComponent } from './components/node/dashboard-network/network/node-network/node-network.component';
import { StratoNetworkComponent } from './components/node/dashboard-network/network/strato-network/strato-network.component';
import { LoginComponent } from './components/client/login/login.component';
import { LoginSeedPhraseComponent } from './components/client/login/login-seed-phrase/login-seed-phrase.component';
import { LoginUsernameComponent } from './components/client/login/login-username/login-username.component';
import { LoginFooterComponent } from './components/client/login/login-footer/login-footer.component';


import { InfoStep1Component } from './components/client/info/info-details/info-step1/info-step1.component';
import { InfoStep2Component } from './components/client/info/info-details/info-step2/info-step2.component';
import { InfoStep3Component } from './components/client/info/info-details/info-step3/info-step3.component';
import { InfoStep4Component } from './components/client/info/info-details/info-step4/info-step4.component';
import { InfoStep5Component } from './components/client/info/info-details/info-step5/info-step5.component';
import { InfoComponent } from './components/client/info/info-details/info.component';



import { NodeLoginComponent } from './components/node/node-login/node-login.component';
import { CardsComponent } from './components/node/dashboard-network/cards/cards.component';
import { DashboardComponent } from './components/node/dashboard-network/dashboard/dashboard.component';
import { HostingComponent } from './components/node/dashboard-network/hosting/hosting.component';
import { NetworkComponent } from './components/node/dashboard-network/network/network.component';
import { TopDetailsComponent } from './components/node/dashboard-network/top-details/top-details.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';







import { SidePanelComponent } from './components/client/info/side-panel/side-panel.component';



import { SettingsComponent } from './components/node/dashboard-network/hosting/settings/settings.component';












@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginUsernameComponent,
    LoginSeedPhraseComponent,
    InfoComponent,
    InfoStep1Component,
    InfoStep2Component,
    InfoStep3Component,
    InfoStep4Component,
    WildcardComponent,
    HeaderComponent,
    FooterComponent,
    LoginFooterComponent,
    DashboardComponent,
    NetworkComponent,
    HostingComponent,
    TopDetailsComponent,
    CardsComponent,
    EntryPointComponent,
    NodeLoginComponent,
    SidePanelComponent,
    NodeNetworkComponent,
    StratoNetworkComponent,
    SettingsComponent,
    InfoStep5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    CountdownModule,
    IgxPieChartModule,
    IgxLegendModule,
    IgxItemLegendModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppServicesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

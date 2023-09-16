import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OfficerComponent } from './officer/officer.component';
import { PortalComponent } from './portal/portal.component';
import { AdduComponent } from './addu/addu.component';
import { AddpComponent } from './addp/addp.component';
import { EdituComponent } from './editu/editu.component';
import { EditpComponent } from './editp/editp.component';
import { HomeoComponent } from './homeo/homeo.component';
import { HomepComponent } from './homep/homep.component';
import { OffComponent } from './off/off.component';
import { PoliComponent } from './poli/poli.component';
import { HomeoffComponent } from './homeoff/homeoff.component';
import { HomepoliComponent } from './homepoli/homepoli.component';
import { AddoffComponent } from './addoff/addoff.component';
import { AddpoliComponent } from './addpoli/addpoli.component';
import { PoliceComponent } from './police/police.component';
import { ComplaintoComponent } from './complainto/complainto.component';
import { ComplaintpComponent } from './complaintp/complaintp.component';
import { UserpeditComponent } from './userpedit/userpedit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    HomeComponent,
    OfficerComponent,
    PortalComponent,
    AdduComponent,
    AddpComponent,
    EdituComponent,
    EditpComponent,
    HomeoComponent,
    HomepComponent,
    OffComponent,
    PoliComponent,
    HomeoffComponent,
    HomepoliComponent,
    AddoffComponent,
    AddpoliComponent,
    PoliceComponent,
    ComplaintoComponent,
    ComplaintpComponent,
    UserpeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

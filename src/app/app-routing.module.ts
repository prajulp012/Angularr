import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
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

const routes: Routes = [
  {path:'userpedit/:id',component:UserpeditComponent},
  {path:'reg',component:RegComponent},
  {path:'userhome',component:HomeComponent},

  {path:'admin/officiallogin',component:OfficerComponent},
  {path:'admin/policelogin',component:PoliceComponent},
  


  {path:'portal',component:PortalComponent},


  
  {path:'userofficialcomplaintadd',component:AdduComponent},
  {path:'userpolicecomplaintadd',component:AddpComponent},

  {path:'userofficialcomplaintedit/:id',component:EdituComponent},
  {path:'userpolicecomplaintedit/:id',component:EditpComponent},
  
  {path:'userofficialcomplaintdisplay',component:HomeoComponent},
  {path:'userpolicecomplaintdisplay',component:HomepComponent},

  {path:'admin',component:OffComponent},


  {path:'polices/:id',component:PoliComponent},    


  
  {path:'officialhome',component:HomeoffComponent},
  {path:'policehome',component:HomepoliComponent},

  {path:'addu/:id',component:AddoffComponent},
  {path:'policeadd/:id',component:AddpoliComponent},

  {path:'complaintofficialdisplay',component:ComplaintoComponent},
  {path:'complaintpolicedisplay',component:ComplaintpComponent},
  {path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { PageComponent } from './page/page.component';
import { OptionsComponent } from './options/options.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CausesComponent } from './causes/causes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule ,Routes} from '@angular/router';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { LoginComponent } from './login/login.component';
import { SignupgenComponent } from './signupgen/signupgen.component';
import { NgoComponent } from './ngo/ngo.component';
import { DonatorComponent } from './donator/donator.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { ClothesComponent } from './clothes/clothes.component';
import { StationeryComponent } from './stationery/stationery.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { LogingenComponent } from './logingen/logingen.component';
import { LogindonatorComponent } from './logindonator/logindonator.component';
import { LoginngoComponent } from './loginngo/loginngo.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { MedicinesngoComponent } from './medicinesngo/medicinesngo.component';
import { ClothesngoComponent } from './clothesngo/clothesngo.component';
import { StationeryngoComponent } from './stationeryngo/stationeryngo.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { LoggedinheaderComponent } from './loggedinheader/loggedinheader.component';
import { LoggedinheaderngoComponent } from './loggedinheaderngo/loggedinheaderngo.component';
import { LoggedinheaderdonatorComponent } from './loggedinheaderdonator/loggedinheaderdonator.component';
import { MiscellaneousngoComponent } from './miscellaneousngo/miscellaneousngo.component';


const appRoutes:Routes=[
  {path:'',component:PageComponent},
  {path:'home',component:PageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'causes',component:CausesComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'options',component:OptionsComponent},
  {path:'signupgen',component:SignupgenComponent},
  {path:'ngo',component:NgoComponent},
  {path:'donator',component:DonatorComponent},
  {path:'medicines',component:MedicinesComponent},
  {path:'clothes',component:ClothesComponent},
  {path:'stationery',component:StationeryComponent},
  {path:'miscellaneous',component:MiscellaneousComponent},
  {path:'loginngo',component:LoginngoComponent},
  {path:'logindonator',component:LogindonatorComponent},
  {path:'logingen',component:LogingenComponent},
  {path: 'medicinesngo',component: MedicinesngoComponent},
  {path: 'clothesngo',component: ClothesngoComponent},
  {path: 'stationeryngo',component: StationeryngoComponent},
  {path:'requirements', component:RequirementsComponent},
  {path: 'miscellaneousngo',component: MiscellaneousngoComponent}

]







@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    OptionsComponent,
    HomeheaderComponent,
    AboutusComponent,
    CausesComponent,
    ContactusComponent,
    FooterComponent,
    LoginheaderComponent,
    LoginComponent,
    SignupgenComponent,
    NgoComponent,
    DonatorComponent,
    MedicinesComponent,
    ClothesComponent,
    StationeryComponent,
    MiscellaneousComponent,
    LogingenComponent,
    LogindonatorComponent,
    LoginngoComponent,
    MedicinesngoComponent,
    ClothesngoComponent,
    StationeryngoComponent,
    RequirementsComponent,
    LoggedinheaderComponent,
    LoggedinheaderngoComponent,
    LoggedinheaderdonatorComponent,
    MiscellaneousngoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }








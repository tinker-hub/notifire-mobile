import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { IncidentReportFeedComponent } from './incident-report-feed/incident-report-feed.component';

import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { VerifyIncidentDialogComponent } from './verify-incident-dialog/verify-incident-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentReportFeedComponent,
    VerifyIncidentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  entryComponents: [VerifyIncidentDialogComponent],
})
export class AppModule {}

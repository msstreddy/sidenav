import { PendingApprovalsComponent } from './components/pending-approvals/pending-approvals.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatIconModule, MatCheckboxModule, MatSnackBarModule, MatTableModule, MatInputModule, MatFormFieldModule, MatBadgeModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    PendingApprovalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PendingApprovalsComponent
      }
    ])
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

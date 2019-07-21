import { PendingApprovalsComponent } from './components/pending-approvals/pending-approvals.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatIconModule, MatCheckboxModule, MatSnackBarModule, MatTableModule, MatInputModule, MatFormFieldModule, MatBadgeModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {TableModule} from 'primeng/table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'

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
    ]),
    TableModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

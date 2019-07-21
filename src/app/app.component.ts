import { IntercomService } from './services/intercom.service';
import { Component, HostListener } from '@angular/core';
import 'hammerjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mdbmo';
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  small=false;
  isClicked: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private intercomService: IntercomService) {
    this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.small=true;
        console.log(
          'Matches small viewport or handset in portrait mode'
        );
      } else {
        this.small=false
      }
    }); 
  }
  dashboard(){
    this.isClicked = !this.isClicked;
    this.intercomService.toggleSearch.emit(this.isClicked);
  }


}

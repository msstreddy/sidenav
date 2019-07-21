import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercomService {

  public toggleSearch: EventEmitter<any> = new EventEmitter();
  
}

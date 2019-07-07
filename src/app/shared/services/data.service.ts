import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject('US');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  public changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

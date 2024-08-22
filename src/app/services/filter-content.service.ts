import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterContentService {

  constructor() { }
  private filterTextSubject = new BehaviorSubject<string>('');
  filterText$ = this.filterTextSubject.asObservable();

  setFilterText(text: string): void {
    this.filterTextSubject.next(text);
  }
}

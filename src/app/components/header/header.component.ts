import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FilterContentService } from '../../services/filter-content.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private filterService: FilterContentService) { }
  filterWord:string =''


  // Method to handle input changes
  onFilterChange(event: any): void {
    const filterText = event.target.value;
    // Pass the filter text to the service
    this.filterService.setFilterText(filterText);
  }
}

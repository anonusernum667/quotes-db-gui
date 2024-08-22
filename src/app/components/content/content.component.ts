import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterContentService } from '../../services/filter-content.service';
import { ShuffleContentPipe } from '../../pipes/shuffle-content.pipe';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, NgForOf, ShuffleContentPipe],
  providers: [ContentService],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  quotes: Data[] = [];
  filteredQuotes: Data[] = []; // Array to hold the filtered quotes

  constructor(
    private service: ContentService,
    private filterService: FilterContentService
  ) {}

  ngOnInit(): void {


    this.service.getallquotes().subscribe(
      (data: Data[]) => {
        console.log(data); // Log the data to see what's being fetched
        this.quotes = data;
      },
      (error) => {
        console.error('Error fetching quotes:', error);
      }
    );

    this.filterService.filterText$.subscribe((filterText) => {
      this.filteredQuotes = this.filterQuotes(filterText);
    });

    // Initialize with no filter
    this.filteredQuotes = this.quotes;
  }

  // Method to filter quotes based on the filter text
  filterQuotes(filterText: string): Data[] {
    if (!filterText.trim()) {
      return this.quotes;
    }
    return this.quotes.filter(
      (quote) =>
        quote.quoteText.toLowerCase().includes(filterText.toLowerCase()) ||
        quote.quoteAuthor.toLowerCase().includes(filterText.toLowerCase())
    );
  }


  copyToClipboard(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Quote copied to clipboard!');
  }
}




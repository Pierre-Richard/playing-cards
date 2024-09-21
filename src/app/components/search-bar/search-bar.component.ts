import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() saerchButtonClicked = new EventEmitter();
  search = model<string>('Initial');

  searchClick() {
    this.saerchButtonClicked.emit();
  }
}

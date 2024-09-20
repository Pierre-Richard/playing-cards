import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {


  @Output() searchChange = new EventEmitter<string>()
  @Output() saerchButtonClicked = new EventEmitter();
  @Input() search = "initial"
searchClick(){
  this.saerchButtonClicked.emit()
}
  updateSearch(value:string) {
    this.searchChange.emit(value)
}
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() viewChange = new EventEmitter<string>();

  selectView(view: string) {
    this.viewChange.emit(view);
  }
}

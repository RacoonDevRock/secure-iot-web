import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  // Método para emitir el nombre de la sección seleccionada
  selectSection(section: string) {
    this.sectionSelected.emit(section);
  }

}

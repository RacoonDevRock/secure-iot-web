import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DoorsComponent } from "../sidebar/content/doors/doors.component";
import { LightsComponent } from "../sidebar/content/lights/lights.component";
import { CamComponent } from "../sidebar/content/cam/cam.component";
import { NotifyComponent } from "../sidebar/content/notify/notify.component";
import { ControlComponent } from "../sidebar/content/control/control.component";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [SidebarComponent, DoorsComponent, LightsComponent, CamComponent, NotifyComponent, ControlComponent],
  templateUrl: './panel.component.html',
  styles: ``
})
export class PanelComponent {
  currentSection: string = 'doors'; // Sección inicial por defecto

  // Cambiar la sección activa según el botón clicado en el sidebar
  onSectionSelected(section: string) {
    this.currentSection = section;
  }

}

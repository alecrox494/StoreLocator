import { Component } from '@angular/core';
import { faBarChart, faFolderBlank, faMap } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Font Awesome icons
  faBarChart = faBarChart;
  faFolderBlank = faFolderBlank;
  faMap = faMap;
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LOGO_IMAGE_URL } from '../../config/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo_image = LOGO_IMAGE_URL;
}

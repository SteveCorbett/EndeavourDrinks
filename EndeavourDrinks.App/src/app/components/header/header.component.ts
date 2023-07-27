import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app.material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

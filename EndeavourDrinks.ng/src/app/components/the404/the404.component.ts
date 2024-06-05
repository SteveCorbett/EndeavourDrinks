import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-the404',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './the404.component.html',
  styleUrls: ['./the404.component.css']
})
export class The404Component {

}

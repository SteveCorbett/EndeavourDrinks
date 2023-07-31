import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TrolleyService } from 'src/app/services/trolley.service';
import { ITrolley } from 'src/app/models/trolley';
import { TrolleyItemComponent } from './trolley-item/trolley-item.component';
import { FormatValuePipe } from 'src/app/pipes/format-value.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trolley',
  standalone: true,
  imports: [
    CommonModule,
    FormatValuePipe,
    MatButtonModule,
    MatIconModule,
    TrolleyItemComponent,
  ],
  templateUrl: './trolley.component.html',
  styleUrls: ['./trolley.component.css'],
})
export class TrolleyComponent {
  private router: Router = inject(Router);
  private trolleyService: TrolleyService = inject(TrolleyService);
  protected trolley: ITrolley = this.trolleyService.nullTrolley;

  constructor() {
    this.trolleyService.trolley$
      .pipe(takeUntilDestroyed())
      .subscribe((trolley: ITrolley) => {
        this.trolley = trolley;
      });
  }

  protected back(): void {
    this.router.navigate(['/products']);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',

})
export class TotalComponent {

  @Input() total: number = 0;
}

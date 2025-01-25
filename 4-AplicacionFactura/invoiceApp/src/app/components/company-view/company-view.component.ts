import { Component, Input } from '@angular/core';
import { Compania } from '../../models/compania';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',

})
export class CompanyViewComponent {

  @Input() compania!: Compania;
}

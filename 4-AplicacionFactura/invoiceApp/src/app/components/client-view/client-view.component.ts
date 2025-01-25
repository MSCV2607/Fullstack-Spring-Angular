import { Component, Input } from '@angular/core';
import { cliente } from '../../models/cliente';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  
})
export class ClientViewComponent {
  @Input() cliente!: cliente;



}

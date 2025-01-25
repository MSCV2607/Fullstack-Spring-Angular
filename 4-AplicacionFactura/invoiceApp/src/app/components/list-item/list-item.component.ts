import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-item',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-item.component.html',

})
export class ListItemComponent {
@Input() items!: Item[];
}

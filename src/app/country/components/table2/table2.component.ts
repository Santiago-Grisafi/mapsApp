import { Component, Input } from '@angular/core';
import { Country } from '../../interface/Country.interface';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {

  @Input() countries: Country[] = [];

}

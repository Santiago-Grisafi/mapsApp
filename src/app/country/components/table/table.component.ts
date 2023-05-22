import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/Country.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.countries);
  }

  @Input() countries: Country[] = [];
  @Input() error: boolean = false;
  @Input() term: string = "";

}

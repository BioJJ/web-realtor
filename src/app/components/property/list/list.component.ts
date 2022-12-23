import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { Properties } from 'src/app/shared/models/properties.model';

@Component({
  selector: 'app-list-property',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  property: Properties[] = [];
  displayedColumns = [
    'id',
    'description',
    'value',
    'status',
    'action',
  ];

  constructor(private propertyService: PropertiesService) {}

  ngOnInit(): void {
    this.propertyService.read().subscribe((property) => {
      this.property = property;
    });
  }
}

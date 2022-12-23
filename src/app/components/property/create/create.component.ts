import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { Properties } from 'src/app/shared/models/properties.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  property: Properties = {
    description: '',
    value: '',
  };

  constructor(
    private propertyService: PropertiesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createProperty(): void {
    this.propertyService.create(this.property).subscribe(() => {
      this.propertyService.showMessage('Imovel criado!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}

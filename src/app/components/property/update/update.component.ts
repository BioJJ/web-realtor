import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { Properties } from 'src/app/shared/models/properties.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  property: Properties;

  constructor(
    private propertyService: PropertiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.propertyService.readById(id).subscribe((property) => {
      this.property = property;
    });
  }

  updateProperty(): void {
    this.propertyService.update(this.property).subscribe(() => {
      this.propertyService.showMessage('Imóvel atualizado com sucesso!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}

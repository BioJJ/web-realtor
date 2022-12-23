import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { Properties } from 'src/app/shared/models/properties.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
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

  deleteProduct(): void {
    this.propertyService.delete(this.property.id).subscribe(() => {
      this.propertyService.showMessage('Imovel excluido com sucesso!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}

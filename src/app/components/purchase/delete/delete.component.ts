import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase/services/purchase.service';
import { Purchase } from 'src/app/shared/models/purchase.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  purchase: Purchase;

  constructor(
    private purchaseService: PurchaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.purchaseService.readById(id).subscribe((purchase) => {
      this.purchase = purchase;
    });
  }

  deletePurchase(): void {
    this.purchaseService.delete(this.purchase.id).subscribe(() => {
      this.purchaseService.showMessage('Venda excluida com sucesso!');
      this.router.navigate(['/purchase']);
    });
  }

  cancel(): void {
    this.router.navigate(['/purchase']);
  }

}

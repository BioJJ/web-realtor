import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase/services/purchase.service';
import { Purchase } from 'src/app/shared/models/purchase.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
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

  updatePurchase(): void {
    this.purchaseService.update(this.purchase).subscribe(() => {
      this.purchaseService.showMessage('Venda atualizado com sucesso!');
      this.router.navigate(['/purchase']);
    });
  }

  cancel(): void {
    this.router.navigate(['/purchase']);
  }
}

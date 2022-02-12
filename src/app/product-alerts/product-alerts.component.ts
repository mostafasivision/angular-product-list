import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'; // just to understant the interface Product
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product; // import product data from  product list (parent) to product-alerts (child)
  @Output() notifyParent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

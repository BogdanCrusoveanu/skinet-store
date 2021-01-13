import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderComponent, OrderDetailedComponent],
  imports: [CommonModule, SharedModule, OrderRoutingModule],
  exports: [],
})
export class OrderModule {}

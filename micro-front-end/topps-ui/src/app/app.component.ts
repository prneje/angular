import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topps-ui';
}

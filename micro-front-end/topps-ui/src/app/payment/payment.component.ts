import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  public changeMeText = "";

  constructor(private router: Router) { window.addEventListener("parentCallBack", (e: any) => {
    this.changeMeText = e?.detail;
    this.router.navigateByUrl('/home');
  });}
  selectedTab: string = 'creditCard';

  openTab(tabName: string) {
    this.selectedTab = tabName;
    this.router.navigateByUrl('/creditcard');
  }
}

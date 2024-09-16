import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet, RouterLink } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "/payment", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path:'payment', component: PaymentComponent },
  
  {
    path: "creditcard",
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: "https://prneje.github.io/ccmfe-app/remoteEntry.js",
        remoteName: "ccmfeApp",
        exposedModule: "./CreditcardModule"
      }).then(m => m.CreditcardModule).catch(err => console.log(err));
    }
  },
  {
    path: "otherPayment",
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: "https://prneje.github.io/ccmfe-app/remoteEntry.js",
        remoteName: "ccmfeApp",
        exposedModule: "./Otherpayment"
      }).then(m => m.OtherpaymentModule).catch(err => console.log(err));
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

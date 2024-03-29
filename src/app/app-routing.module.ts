import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'adminPanel',
    component: AdminSettingsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'contentConfiguration',
    component: AdminPanelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'accountSettings',
    component: AccountSettingsComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

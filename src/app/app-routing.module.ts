import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

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
    component: AdminPanelComponent
  },
  {
    path: 'contentConfiguration',
    component: AdminPanelComponent
  },
  {
    path: 'accountSettings',
    component: AccountSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

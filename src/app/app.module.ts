import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MainSectionComponent,
    SectionComponent,
    FooterComponent,
    AdminSettingsComponent,
    LoginFormComponent,
    LoginPageComponent,
    AdminPanelComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// // Material Form Controls
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// // Material Navigation
// import { MatMenuModule } from '@angular/material/menu';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// // Material Layout
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatListModule } from '@angular/material/list';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTreeModule } from '@angular/material/tree';
// // Material Buttons & Indicators
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatRippleModule } from '@angular/material/core';
// // Material Popups & Modals
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// // Material Data tables
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     MatAutocompleteModule,
//     MatCheckboxModule,
//     MatDatepickerModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRadioModule,
//     MatSelectModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatMenuModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatCardModule,
//     MatDividerModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatListModule,
//     MatStepperModule,
//     MatTabsModule,
//     MatTreeModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatBadgeModule,
//     MatChipsModule,
//     MatIconModule,
//     MatProgressSpinnerModule,
//     MatProgressBarModule,
//     MatRippleModule,
//     MatBottomSheetModule,
//     MatDialogModule,
//     MatSnackBarModule,
//     MatTooltipModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatTableModule
//   ],
//   exports: [
//     MatAutocompleteModule,
//     MatCheckboxModule,
//     MatDatepickerModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRadioModule,
//     MatSelectModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatMenuModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatCardModule,
//     MatDividerModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatListModule,
//     MatStepperModule,
//     MatTabsModule,
//     MatTreeModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatBadgeModule,
//     MatChipsModule,
//     MatIconModule,
//     MatProgressSpinnerModule,
//     MatProgressBarModule,
//     MatRippleModule,
//     MatBottomSheetModule,
//     MatDialogModule,
//     MatSnackBarModule,
//     MatTooltipModule,
//     MatPaginatorModule,
//     MatSortModule,
//     MatTableModule
//   ]
// })

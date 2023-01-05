import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MailPageComponent } from './pages/mail-page/mail-page.component';

const routes: Routes = [
  {
      path:"",
      component: MainPageComponent
  },
  {
      path:"main-page",
      component: MainPageComponent
  },
  {
      path:"mail-page",
      component: MailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

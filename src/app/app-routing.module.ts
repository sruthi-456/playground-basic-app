import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { QuestionnaireComponentComponent } from './questionnaire-component/questionnaire-component.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DatatableComponent,
     data: {
            title: 'HomePage'
        },

  },
  {
    path: 'questionaire',
    component: QuestionnaireComponentComponent,
      data: {
            title: 'questionaire'
        },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
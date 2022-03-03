import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';




@NgModule({
  declarations: [
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports:[
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }

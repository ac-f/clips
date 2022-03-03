import { ModalService } from 'src/app/services/modal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(private modal:ModalService) {
    this.modal.register('auth');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }


}

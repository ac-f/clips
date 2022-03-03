import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalID :string = '';
  constructor(
    public modal: ModalService,
    private el: ElementRef) {
      document.body.appendChild(this.el.nativeElement);
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }

}

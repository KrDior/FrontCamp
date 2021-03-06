import { Component, ViewChild, TemplateRef, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html'
})
export class ModalWindowComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('content', { static: false })
  @Input() toggleModal: boolean;
  private contentWindow: TemplateRef<any>;
  closeResult: string;
  modalReference: any;

  constructor(
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openModal() {
    this.modalService.open(this.contentWindow);
  }

  closeModal() {
    this.modalReference.close();
    // this.modalService.dismissAll();
  }

  ngOnDestroy() {
  }
}

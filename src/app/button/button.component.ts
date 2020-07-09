import { SubjectHandlerService } from './../subject-handler.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() emitButtonEvent = new EventEmitter<any>();

  constructor(
    private subjectHandler: SubjectHandlerService
  ) { }

  ngOnInit(): void {
  }

  handleEvent(type) {
    if (type === 1) {
      this.emitButtonEvent.emit();
    } else {
      this.subjectHandler.subject.next();
    }
  }

}

import { SubjectHandlerService } from './subject-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buttonMsg: string;
  constructor(private subjectHandler: SubjectHandlerService) { }

  ngOnInit(): void {
    // this.subjectHandler.subject.subscribe(() => {
    //   this.buttonMsg = 'from subject';
    // });
  }

  emitButtonEvent() {
    this.buttonMsg = 'From output event';
  }

}

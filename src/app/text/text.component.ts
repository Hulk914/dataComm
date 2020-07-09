import { SubjectHandlerService } from './../subject-handler.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnChanges {
  @Input() buttonMsg: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  constructor(
    private subjectHandler: SubjectHandlerService
  ) { }

  ngOnInit(): void {
    this.subjectHandler.subject.subscribe(() => {
      this.buttonMsg = 'from subject';
    });
  }

}

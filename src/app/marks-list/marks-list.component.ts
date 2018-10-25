import { Component, OnInit } from '@angular/core';
import { MarksServiceService } from '../marks-service.service';
import { MarksList } from '../app.interface';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  marks: MarksList[];
  status = {
    0: 'Fail',
    1: 'Pass',
    2: 'Topper'
  };

  constructor(private service: MarksServiceService) {}

  ngOnInit() {
    this.service.getMarks().subscribe(d => {
      this.marks = d;

      for (const item of this.marks) {
        this.setTotal(item);
        this.setStatus(item);
      }

      const total = Math.max.apply(null, this.marks.map(i => i.total));
      this.marks.find(i => i.total === total).status = 2;
    });
  }

  setStatus(marks: MarksList) {
    marks.status = +Object.values(marks.marks)
                    .map(i => +i)
                    .every(i => i >= 20);
  }

  setTotal(marks: MarksList) {
    marks.total = Object.values(marks.marks)
                    .map(i => +i)
                    .reduce((p, c) => p + c, 0);
  }
}

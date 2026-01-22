import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-attendance-tracker',
  standalone: true,
  imports: [NgFor],
  templateUrl: './attendance-tracker.html',
  styleUrl: './attendance-tracker.css',
})
export class AttendanceTracker {
  constructor(public hr: HrService) {}

  mark(emp: any, status: string) {
    if (emp.attendance === 'Not Marked') {
      emp.attendance = status;
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public hr: HrService) {}

  get presentCount() {
    return this.hr.employees.filter(e => e.attendance === 'Present').length;
  }

  get absentCount() {
    return this.hr.employees.filter(e => e.attendance === 'Absent').length;
  }

  get pendingLeaves() {
    return this.hr.getPendingLeaves().length;
  }
}

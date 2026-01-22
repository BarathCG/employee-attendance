import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './leave-request.html',
  styleUrl: './leave-request.css',
})
export class LeaveRequest {
  selectedEmpId: number | null = null;
  leaveDate = '';
  reason = '';

  constructor(public hr: HrService) {}

  submit() {
    if (!this.selectedEmpId || !this.leaveDate || !this.reason) {
      alert('Please fill all fields');
      return;
    }

    const emp = this.hr.employees.find(e => e.id === this.selectedEmpId);

    this.hr.applyLeave({
      empId: emp?.id,
      name: emp?.name,
      department: emp?.department,
      date: this.leaveDate,
      reason: this.reason,
      status: 'Pending'
    });

    alert('Leave request submitted');

    this.selectedEmpId = null;
    this.leaveDate = '';
    this.reason = '';
  }
}

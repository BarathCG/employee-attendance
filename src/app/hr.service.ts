import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  employees = [
    { id: 101, name: 'Arun', department: 'IT', attendance: 'Not Marked' },
    { id: 102, name: 'Karthik', department: 'HR', attendance: 'Not Marked' },
    { id: 103, name: 'Priya', department: 'Finance', attendance: 'Not Marked' },
    { id: 104, name: 'Divya', department: 'Marketing', attendance: 'Not Marked' },
    { id: 105, name: 'Rahul', department: 'IT', attendance: 'Not Marked' },
    { id: 106, name: 'Sneha', department: 'Operations', attendance: 'Not Marked' },
    { id: 107, name: 'Vikram', department: 'HR', attendance: 'Not Marked' },
    { id: 108, name: 'Anjali', department: 'Finance', attendance: 'Not Marked' },
    { id: 109, name: 'Suresh', department: 'Admin', attendance: 'Not Marked' },
    { id: 110, name: 'Meena', department: 'IT', attendance: 'Not Marked' }
  ];

  leaveRequests: any[] = [];

  markAttendance(id: number, status: string) {
    const emp = this.employees.find(e => e.id === id);
    if (emp) {
      emp.attendance = status;
    }
  }

  applyLeave(leave: any) {
    this.leaveRequests.push(leave);
  }

  getPendingLeaves() {
    return this.leaveRequests.filter(l => l.status === 'Pending');
  }
}

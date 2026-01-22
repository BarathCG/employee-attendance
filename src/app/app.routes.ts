import { Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { EmployeeList } from './employee-list/employee-list';
import { AttendanceTracker } from './attendance-tracker/attendance-tracker';
import { LeaveRequest } from './leave-request/leave-request';
import { LeaveApproval } from './leave-approval/leave-approval';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'employees', component: EmployeeList },
  { path: 'attendance', component: AttendanceTracker },
  { path: 'leave-request', component: LeaveRequest },
  { path: 'leave-approval', component: LeaveApproval }
];

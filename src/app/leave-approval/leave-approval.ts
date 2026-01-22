import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-leave-approval',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './leave-approval.html',
  styleUrl: './leave-approval.css',
})
export class LeaveApproval {
  constructor(public hr: HrService) {}
}

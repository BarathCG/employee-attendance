import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  constructor(public hr: HrService) {}
}

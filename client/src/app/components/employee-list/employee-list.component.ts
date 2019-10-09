import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../interfaces/Employee";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeService.getEmployees()
      .subscribe(
        res => {
          console.log(res);
          this.employees = res;

        },
        err => console.log(err)
      );
  }

  deleteEmployee(id: string): void {
    this.employeService.deleteEmployee(id)
      .subscribe(
        res => {
          console.log(res);
          this.getEmployees();
        },
        err => console.log(err)
      )
  }
}

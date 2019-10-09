import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../interfaces/Employee";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0
  }

  edit: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    // Asigno a params el id de url
    const params = this.activatedRoute.snapshot.params;
    // Verifico si el parametro url existe
    if (params) {
      // si existe relleno el formulario con los datos y cambio edit a true
      this.employeeService.getEmployee(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.employee = res;
            this.edit = true;
          }
        );
    }
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(
        res =>  {
          console.log(res);
          this.router.navigate(['/'])
        },
        err => console.log(err)
      );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee._id, this.employee)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/employee']);
        },
        err => console.log(err)
      );
  }

}

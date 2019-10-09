import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URI: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(`${this.URI}/employee`);
  }

  getEmployee(id: string) {
    return this.http.get<Employee>(`${this.URI}/employee/${id}`);
  }

  createEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.URI}/employee`, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete<Employee>(`${this.URI}/employee/${id}`);
  }

  updateEmployee(id: string, employee: Employee) {
    return this.http.put<Employee>(`${this.URI}/employee/${id}`, employee);
  }
}

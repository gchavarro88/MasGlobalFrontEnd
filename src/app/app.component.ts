import { Component,OnInit} from '@angular/core';
import { EmployeeDTO } from './EmployeeDTO';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'MasGlobalFrontEnd Test';
  employeeId: number;
  employees: EmployeeDTO [];


  constructor(private employeeService: EmployeeService) { }

  /** Init */
  ngOnInit(): void {
    
  }

  public getAllEmployees(){
    this.employeeService.getAllEmployees()
    .subscribe(employees => this.employees = employees);
  }

  public getEmployeeById(employeeId: number){
    this.employees = [];
    this.employeeService.getEmployeeById(employeeId)
    .subscribe(employee => this.employees = new Array(employee));
  }

  public searchEmployees(){
    if(this.employeeId){
      this.getEmployeeById(this.employeeId);
    }else{
      this.getAllEmployees();
    }
  }

  onKeyPress(value: number) {
    this.employeeId = value ;
  }
}

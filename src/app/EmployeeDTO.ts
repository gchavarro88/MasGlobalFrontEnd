export interface EmployeeDTO {
  /** Employee Id*/
  id: number;

  /** Employee Name*/
  name: string;

  /** Type of Contract*/
  contractTypeName: string;

  /** Role Id*/
  roleId: number;

  /** Role Name*/
  roleName: string;

  /** Hourly Salary Value*/
  hourlySalary: number;

  /** Monthly Salary Value*/
  monthlySalary: number;

  /** Annual Salary Value*/
  annualSalary: number;

}
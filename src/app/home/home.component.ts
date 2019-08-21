import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SaveEmployee } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { SnackBarService } from '../snackbar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private saveemp: SaveEmployee, private activatedRoute: ActivatedRoute, private snack: SnackBarService) {
  }

  checked = false;
  indeterminate = false;
  locations = ['Sharda', 'Anex', 'Hinjewadi'];
  // preferedlocation = ['Pune', 'Bangalore', 'Mumbai'];

  employee = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl('', Validators.required),
    skills: new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl()
    ]),
    currentlocation: new FormControl('', Validators.required),
    joiningdate: new FormControl('', Validators.required)
  });
  skilllist = ['Java', 'Python', 'Angular', 'AWS'];
  selectedSkills = [];
  selectedEmp;
  id;
  updateEmp;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params[('id')];
    this.getEmployee();
  }

  onSignup() {
    if (!this.id) {
      this.employee.value.skills = this.selectedSkills;
      this.employee.value.id = new Date().getTime();
      this.saveemp.saveEmployee(this.employee.value).subscribe(res => {
        console.log('res emp object: ' + res);
        // this.snack.showSnackBar('Employee added successfully');
      }, err => {
        console.log(err);
        // this.snack.showSnackBar('Employee could not be added');
      });
      console.log(this.saveemp.getEmployeeDetails());
      this.employee.reset();
      this.selectedSkills = [];

    } else if (this.id) {
      this.employee.value.id = this.id;
      this.employee.value.skills = this.selectedSkills;
      this.saveemp.updateEmployee(this.employee.value);
      this.employee.reset();
      this.selectedSkills = [];
    }
  }
  get name() { return this.employee.get('name'); }
  get gender() { return this.employee.get('gender'); }
  get skills() { return this.employee.get('skills'); }
  get currentlocation() { return this.employee.get('currentlocation'); }
  get joiningdate() { return this.employee.get('joiningdate'); }


  onChange(event, value) {
    if (event.checked) {
      this.selectedSkills.push(value);
    } else {
      this.selectedSkills = this.selectedSkills.filter((sk) => sk !== value);
    }
  }
  
  getEmployee() {
    if (this.id) {
      this.selectedEmp = this.saveemp.getEmployeeById(this.id)[0];
      this.employee.patchValue({
        name: this.selectedEmp.name,
        id: this.selectedEmp.id,
        gender: this.selectedEmp.gender,
        skills: this.selectedEmp.skills,
        currentlocation: this.selectedEmp.currentlocation,
        joiningdate: this.selectedEmp.joiningdate
      });
      this.selectedSkills = this.selectedEmp.skills;
    }
  }
}

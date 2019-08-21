import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SaveEmployee } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  employeeUpdate;
  locations = ['Sharda', 'Anex', 'Hinjewadi'];
  employee = new FormGroup({
    name: new FormControl('', Validators.required),
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
  constructor(private empser: SaveEmployee, private dialogRef: MatDialogRef<EditComponent>) { }

  ngOnInit() {
    console.log(this.employeeUpdate);
    this.onUpdate();
  }
  onUpdate() {
    // this.selectedSkills = [];
    this.employee.patchValue({
      name: this.employeeUpdate.name,
        gender: this.employeeUpdate.gender,
        skills: this.employeeUpdate.skills,
        currentlocation: this.employeeUpdate.currentlocation,
        joiningdate: this.employeeUpdate.joiningdate
      });
    this.selectedSkills = this.employeeUpdate.skills;
  }

  onSave() {
    console.log('after On save');
    console.log(this.employee.value);
    this.employee.value.skills = this.selectedSkills;
    this.employee.value._id =  this.employeeUpdate._id,
    this.empser.updateEmployee(this.employee.value).subscribe(res=>{
      if(res){
        console.log(res);
      }
    });
    this.selectedSkills = [];
    this.employee.reset();
    this.dialogRef.close(this.employee);
  }
  onChange(event, value) {
    if (event.checked) {
      this.selectedSkills.push(value);
      console.log(value);
    } else {
      this.selectedSkills = this.selectedSkills.filter((sk) => sk !== value);
      console.log('not ', value);
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SaveEmployee {
    emp = [{
        id: 111111111,
        name: 'Subham default',
        gender: 'male',
        skills: ['Java', 'Angular', 'Python'],
        currentlocation: 'Hinjewadi',
        joiningdate: new Date()
    }];
    baseUrl = 'http://localhost:3000/'
    constructor(private http: HttpClient) {

    }

    saveEmployee(empobj) {
        // this.emp.push(empobj);
        return this.http.post(this.baseUrl + 'empdata', empobj);
    }
    getEmployeeDetails() {
        return this.http.get(this.baseUrl + 'empdata');
        // console.log('actual emp', this.emp);
    }
    getEmployeeById(id) {
        return this.emp.filter(x => x.id == id); // returns array always
    }

    updateEmployee(employee) {
        return this.http.put(this.baseUrl + 'empdata' + '/' + employee._id, employee);
    }
    deleteEmployee(id) {
        return this.http.delete(this.baseUrl + 'empdata' + '/' + id);
    }
}


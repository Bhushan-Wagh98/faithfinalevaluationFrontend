import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { VisitTable } from '../shared/visit-table';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.scss'],
})
export class CreateVisitComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    if (!this.loginService.isLogged) {
      location.href = 'login';
    }
    this.getAllEmp();
  }

  onSubmit(forms: VisitTable) {
    console.log(forms);

    let _addVisitID = this.loginService.forVisitTableComponent.visit_id;
    // check condition
    if (_addVisitID === 0 || !_addVisitID) {
      this.addVisit(forms);
    } else {
      this.editVisit(forms);
    }
  }

  getAllEmp() {
    this.loginService.getAllEmployee();
  }
  addVisit(forms) {
    console.log('Inserting...');
    this.loginService.insertVisit(forms).subscribe(
      (res) => {
        console.log(res);
        // Notification
        alert('Purchase record has been inserted!');
        setTimeout(() => {
          location.href = 'visittable';
        });
      },
      (error) => {
        console.log(error);
        // Notification
      }
    );
  }
  editVisit(forms) {
    this.loginService.editVisit(forms).subscribe(
      (res) => {
        setTimeout(() => {
          location.href = 'visittable';
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

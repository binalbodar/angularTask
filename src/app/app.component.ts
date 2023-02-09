import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularTask';

  ngOnInit(): void { }
  public isChecked = true;

  taskForm = new FormGroup({
    task: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  })
  edit: any = '';

  deleteRow(item: any) {
    this.employ.splice(item, 1);
  }

  onSubmit() {
    let value = this.taskForm.value
    if (this.edit !== '') {
      this.employ[this.edit] = { task: value.task, date: value.date };
      this.edit = '';
      this.clearForm();
    }
    else {
      this.employ.push(value);
      this.clearForm();
    }
  }

  clearForm() {
    this.taskForm.reset();
  };

  editRow(employ: any, index: any) {
    this.edit = index
    this.taskForm.patchValue({
      task: employ.task,
      date: employ.date
    })
  }

  employ: any = []

  searchText = '';
  filterDate = '';
}

class Employ {
  task: string | undefined;
  date: string | undefined;
}

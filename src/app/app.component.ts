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

  onSubmit() {
    let value = this.taskForm.value
    this.employ.push(value);
    this.clearForm();
  }

  clearForm() {
    this.taskForm.reset();
  };

  deleteRow(item: any) {
    this.employ.splice(item, 1);
  }

  toDisplay = true;

  editRow(employ: any, index: any) {
    this.edit = index
    this.toDisplay = !this.toDisplay;
    this.taskForm.patchValue({
      task: employ.task,
      date: employ.date
    })
  }

  onupdate(){
    let value = this.taskForm.value
    this.toDisplay = !this.toDisplay;
      this.employ[this.edit] = { task: value.task, date: value.date };
      this.clearForm();
  }

  employ: any = []

  searchText = '';
}

class Employ {
  task: string | undefined;
  date: string | undefined;
}

import { Component, OnInit } from '@angular/core';
import { IProject } from '../project/project';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  public project: IProject = {
    "name": '',
    "desc": '',
    "type":'',
    "score": "0"
  };
  public url: string = '';


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  onSubmit() {
    this.http.post(this.url + "/googlesheet/create/", this.project);
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}

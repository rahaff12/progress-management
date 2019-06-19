import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../project/project';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  @Input() public project: IProject;

  

  constructor(private http: HttpClient) { }

  public onSubmit() {



  }

  ngOnInit() {
    
  }

}

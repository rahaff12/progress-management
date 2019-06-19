import { Component, OnInit, Input } from '@angular/core';
import { IProject } from './project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() public project: IProject;

  constructor() { }

  editClicked() {

  }

  deleteClicked() {
    //TODO...
  }

  infoClicked() {
    //TODO...
  }


  

  ngOnInit() {
  }

}

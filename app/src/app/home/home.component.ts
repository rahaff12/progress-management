import { Component, OnInit } from '@angular/core';
import { IProject } from '../project/project';
import { ProjectListService } from '../project-list/project-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectList: IProject[] = new Array();
  leadingProject: IProject;

  constructor(
    private projectListService: ProjectListService
  ) { }

  setLeadingProject() {
    let leading: IProject = {
      "name":"",
      "type":"",
      "desc": "",
      "score":"0"
    };
    for(let project of this.projectList) {
      if(+leading.score <=  +project.score)
        leading = project;

      this.leadingProject = leading;
    }
  }

  ngOnInit() {
    this.projectListService.getProjectList().subscribe(
      projects => {
        this.projectList =  projects
        this.setLeadingProject()
      }
    );
    
  }
}

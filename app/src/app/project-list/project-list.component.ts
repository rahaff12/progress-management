import { Component, OnInit } from '@angular/core';
import { IProject } from '../project/project';
import { ProjectListService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: IProject[];

  dividedList: IProject[][];
  constructor(private projectListService: ProjectListService) { 
    this.projectList = new Array();
    this.dividedList =  new Array();
  }


  divideList() {
    let divideBy = 5;
    for(let i = 0; i < this.projectList.length; i+=divideBy) {
      this.dividedList.push(new Array());
      for(let j = 0; j < divideBy; j++) {
        if( (i+j) >  this.projectList.length)
          break;
        this.dividedList[+(i/divideBy)].push(this.projectList[i+j]);
      }
    }

  }

  range(last: number): number[] {
    let output: number[] = new Array();
    for(let i = 0; i < last; i++) {
      output.push(i);
    }
    return output;
  }

  ngOnInit() {

    this.projectListService.getProjectList().subscribe(
      projects =>  {
      this.projectList = projects;

      this.divideList();
      
      }
    );
    

  }

}

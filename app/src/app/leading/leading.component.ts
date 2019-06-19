import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../project/project';

@Component({
  selector: 'app-leading',
  templateUrl: './leading.component.html',
  styleUrls: ['./leading.component.css']
})
export class LeadingComponent implements OnInit {

  @Input() project: IProject;

  constructor() { }

  ngOnInit() {
    
  }

}

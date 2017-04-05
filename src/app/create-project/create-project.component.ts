import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {

  addProject(author: string, title: string, goal: number, deadline: string, launchDate: string, description: string, location: string, coverImage: string, avatar: string, category: string) {
    var newProject: Project = new Project(coverImage, category, author, avatar, launchDate, deadline, description, goal, location, title);
    console.log(newProject);
    this.projectService.saveProject(newProject);
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProjectService]
})
export class DashboardComponent implements OnInit {
  filterByCreator: string = "creator";
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  // onCreatorChange(optionFromMenu) {
  //   this.creatorProjects = [];
  //   var numberOfCreators: any = document.getElementById("creatorsList");
  //   // var numberOfCreators = [];
  //   console.log(numberOfCreators);
  //   for (var i = 0; i < numberOfCreators; i++) {
  //     if (optionFromMenu === this.projects[i].creator) {
  //       this.creatorProjects.push(this.projects[i]);
  //     }
  //   }
  // }

}

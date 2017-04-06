import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProjectService]
})
export class DashboardComponent implements OnInit {
  filterByCreator: string = "creator";
  projects: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  beginDeletingProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this item from your projects?")){
     this.projectService.deleteProject(projectToDelete);
   }
  }

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(private projectService: ProjectService, private router: Router) {
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

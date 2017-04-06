import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');

  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectKey: string) {
    return this.angularFire.database.object('/projects/' + projectKey);
  }

  saveProject(newProject: Project) {
    this.projects.push(newProject);
  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  updateProject(thisProject: any) {
    var projectEntryInFirebase = this.getProjectById(thisProject.$key);
    projectEntryInFirebase.update({title: thisProject.title,
                                creator: thisProject.creator,
                                goal: thisProject.goal,
                                deadline: thisProject.deadline,
                                location: thisProject.location,
                                url: thisProject.url,
                                date: thisProject.date,
                                description: thisProject.description,
                                creatorImage: thisProject.creatorImage,
                                categories: thisProject.categories});

  }

  likeProject(thisProjectId: any) {
    var projectEntryInFirebase = this.getProjectById(thisProjectId);
    var newLike = null;
    projectEntryInFirebase.subscribe(dataLastEmittedObserver => {
      newLike = dataLastEmittedObserver.likes
    });
    newLike = newLike + 1;
    projectEntryInFirebase.update({likes: newLike});
  }
}

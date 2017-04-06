import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
@Input() selectedProject;
editFormShown: boolean = false;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  updateProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
    this.editFormShown = false;
  }

  showEditForm() {
    this.editFormShown = true;
  }

  cancelEdit() {
    this.editFormShown = false;
  }

}

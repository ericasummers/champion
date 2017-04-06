import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'creator',
  pure: false
})
export class CreatorPipe implements PipeTransform {

  transform(input: Project[], desiredCreator): any {
    var output: Project[] = [];
    if (input && desiredCreator) {
      for (var i = 0; i < input.length; i++) {
        if (desiredCreator === input[i].creator) {
          output.push(input[i]);
        }
        return output;
      }
    }
  }

}

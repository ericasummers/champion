export class Project {
  likes: number = 0;
  constructor(public url: string, public categories: string, public creator: string, public creatorImage: string, public date: string, public deadline: string, public description: string, public goal: number, public location: string, public title: string) { }
}

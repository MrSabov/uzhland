import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'challengeLevel'
})
export class ChallengeLevelPipe implements PipeTransform {

  transform(value: any): any {
    const levels: any = [
      {id: 0, name: 'Для новачків'},
      {id: 1, name: 'Середній рівень'},
      {id: 2, name: 'Важкий рівень'}
    ];
    let challengeStatus: any;
    levels.forEach(x => {
      if (value === x.id) {
        challengeStatus = x.name;
      }
    });
    return challengeStatus;
  }

}

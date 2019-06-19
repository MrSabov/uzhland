import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'challengeStatus'
})
export class ChallengeStatusPipe implements PipeTransform {

  transform(value: any): any {
    const typeStatus: any = [
      {id: 0, name: 'Нове'},
      {id: 1, name: 'В перевірці'},
      {id: 2, name: 'В процессі'},
      {id: 3, name: 'Протестованне'}
    ];
    let challengeStatus: any;
      typeStatus.forEach(x => {
        if (value === x.id) {
          challengeStatus = x.name;
        }
      });
    return challengeStatus;
 }

}

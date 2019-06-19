import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'challengeVerdict'
})
export class ChallengeVerdictPipe implements PipeTransform {

  transform(value: any): any {
    const typeVerdicts: any = [
      {id: 0, name: 'Не протестовано'},
      {id: 1, name: 'Успіх'},
      {id: 2, name: 'Ліміт часу'},
      {id: 3, name: 'Ліміт памяті'},
      {id: 4, name: 'неправильна відповідь'},
      {id: 5, name: 'RuntimeError'},
      {id: 6, name: 'Системна помилка'},
      {id: 7, name: 'Пропущенно'},
    ];
    let challengeVerdict: any;
    typeVerdicts.forEach(x => {
      if (value === x.id) {
        challengeVerdict = x.name;
      }
    });
    return challengeVerdict;
  }

}

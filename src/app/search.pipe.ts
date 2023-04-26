import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox',
})
export class SearchBoxPipe implements PipeTransform {
  transform(usersvalue: Array<any>, searchTxt: string): Array<any> {
    return usersvalue.filter(getData);
    function getData(value, index) {
      if (value.name.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1) {
        return usersvalue[index];
      }
    }
  }
}

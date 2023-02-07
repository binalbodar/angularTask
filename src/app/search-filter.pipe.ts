import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any [] {
    if(!value) return [];
    if(!searchText) return value;

    searchText = searchText.toLowerCase();

    return value.filter(function(employ: any){
        return JSON.stringify(employ).toLowerCase().includes(searchText);
    });
}

}

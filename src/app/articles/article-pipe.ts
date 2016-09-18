import { Pipe, PipeTransform } from "@angular/core";
import {Article} from "./article";


@Pipe({
  name: 'articleSearch',
  pure: false
})
export class ArticleSearchPipe implements PipeTransform{

  transform(value: Article[], args?: string): any{

    if (value.length === 0){
      return value;
    }

    if (args == ''){
      return value;
    }
    else {
      let resultArray = [];

      for (let item of value){
        if ((item.title.match('^.*' + args[0].toLowerCase() + '.*$')) ||
            (item.title.match('^.*' + args[0].toUpperCase() + '.*$'))){
          resultArray.push(item);
        }
      }
      return resultArray;
    }

    // return value.filter(
    //   (item: Article) => {
    //
    //     // if (item === null)
    //     // {item = item;}
    //     // else if (typeof item === 'undefined')
    //     // {item =  item;}
    //     // // else
    //     item.title = item.title.toUpperCase();
    //
    //   }
    // );
  }
}

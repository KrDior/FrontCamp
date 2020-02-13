import { Pipe, PipeTransform } from '@angular/core';
import { NewsItem } from '../../interfaces';

@Pipe({
    name: 'localNewsFilter'
})
export class LocalNewsFilterPipe implements PipeTransform {
  transform(articles$: NewsItem[], term: boolean): NewsItem[] {

    return term ? articles$.filter(article => article.isLocalNews) : articles$;
  }
}

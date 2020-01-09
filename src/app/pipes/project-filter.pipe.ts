import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' ) return value;
    const resultado = [];
    for ( const post of value){
    if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      resultado.push(post);
    };
  };
  return resultado;
  }
}

import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): { [s:string]: boolean } | null {
    if ( control.value && control.value?.toLowerCase() === 'herrera'){
      return { noHerrera: true }
    }
    return null;
  }


}

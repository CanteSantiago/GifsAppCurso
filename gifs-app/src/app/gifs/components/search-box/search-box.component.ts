import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
 template:`
 <h5>Buscar:</h5>
 <input type="text"
 class="form-control"
 placeholder="Buscar gifs..."
(keyup.enter)="searchTag()"
#txtTagInput
 >
 `
})
export class SearchBoxComponent  {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef <HTMLInputElement>;

constructor(){ }

  // searchTag(newTag: string){
    searchTag(){
      const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewComponent } from './search-view/search-view.component';



@NgModule({
  declarations: [SearchViewComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchViewComponent]
})
export class PokeModule { }

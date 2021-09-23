import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    NewComponent,
    NewsComponent
  ],
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

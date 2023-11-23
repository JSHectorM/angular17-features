import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl font-semibold mb-5" >
      {{ title }} - Atributo: {{ withSahadow }}
    </h1>
    `
})
export class TitleComponent {


  @Input({ required: true }) public title !: string ;
  @Input({ transform: booleanAttribute }) public withSahadow : boolean = false;
}

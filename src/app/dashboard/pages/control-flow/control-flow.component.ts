import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Grade = "A" | "B" | "C" | "D" | "F";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  
  public showContent = signal(false);
  
  public grade = signal<Grade>("A");

  public grades = signal<Grade[]>(["A","B","C","D","F"]);

  public frameworks = signal(["Angular","React","Vue", "Svelte", "Ember", "Quik"  ]);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }

  public toggleGrade($event: Event) {
    const target = $event?.target as HTMLInputElement;
    if (target) {
      console.log(target.value);
      this.grade.update( () => target.value as Grade );
    }
  }

}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  
  public showContent = signal(false);


  public toggleContent() {
    this.showContent.update( value => !value)
  }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input()
    inputProps = {
    inputvalue: "",
    stylesProps: {},
    placeholder: "",
    type: "text"
  }
  @Output() eventEmitter = new EventEmitter();

  onChangeInputValue(event: KeyboardEvent) {
    this.eventEmitter.emit((event.target as HTMLInputElement).value)
  }
}

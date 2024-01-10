
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: "./list.component.html",
  styleUrls: ['./list.component.css'],

})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]

  onDelete(id:string|undefined): void {
    if (id == undefined) return;
    console.log(id);

    this.onDeleteId.emit(id);
  }


}

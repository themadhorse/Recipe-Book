import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent{
    @Output() shouldSave: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    setSave(value: boolean){
        this.shouldSave.emit(value);
    }
}
import { NgModule } from '@angular/core';
import { SafetyComponent } from './safety.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        SafetyComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SafetyComponent
    ]
})

export class SafetyModule {
    
}
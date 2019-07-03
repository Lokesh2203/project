import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen=false;
    //placing the listener on the document instead of the dropdown to close the dropdown 
    //just clicking anywhere on the screen instead of clicking in the dropdown to close it(toggle)
    @HostListener('document:click',['$event']) toggleOpen(event: Event){
        this.isOpen= this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef){}
}
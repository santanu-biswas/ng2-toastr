import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
export declare class AppComponent {
    private toastr;
    constructor(toastr: ToastsManager, vRef: ViewContainerRef);
    showSuccess(): void;
    showError(): void;
    showWarning(): void;
    showInfo(): void;
    showClickToDismiss(): void;
    showCustomLife(): void;
    showControlled(): void;
    swiped(event: any): void;
    showCustomHTML(): void;
}



-----------------------------------------------------------


  <th id="e_uid" pSortableColumn="agentId" class="header-cell">xxxxx
                            <p-sortIcon field="agentId"></p-sortIcon>
                            <p-columnFilter field="agentId" display="menu" [showMatchModes]="false"
                                [showOperator]="false" [showAddButton]="false" [hideOnClear]="true"
                                [showApplyButton]="false">
                                <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                                    <input type="text" pInputText [(ngModel)]="agentIdFilterValue" 
                                           placeholder="testssss">
                                    <div class="filter-buttons">
                                        <button pButton type="button" label="適用" 
                                                (click)="applyAgentIdFilter(filter)"></button>
                                        <button pButton type="button" label="クリア" 
                                                (click)="clearAgentIdFilter(filter)"></button>
                                    </div>
                                </ng-template>
                            </p-columnFilter>
                        </th>

                          
  

  agentIdFilterValue: string = '';

  clearAgentIdFilter(filterCallback: any) {
    this.agentIdFilterValue = '';
    filterCallback(null);
  }

  applyAgentIdFilter(filterCallback: any) {
    if (this.agentIdFilterValue && this.agentIdFilterValue.trim()) {
      filterCallback(this.agentIdFilterValue.trim());
    } else {
      filterCallback(null);
    }
  }

  clearAgentIdFilter(filterCallback: any) {
    this.agentIdFilterValue = '';
    filterCallback(null);
  }

  onAgentIdFilterChange(event: any) {
    this.applyAgentIdFilter((value: string) => {
      this.table.filter(value, 'agentId', 'contains');
    });
  }
  clearAgentIdFilterInput() {
    this.clearAgentIdFilter((value: string) => {
      this.table.filter(value, 'agentId', 'contains');
    });
  }
  onProducerCodeKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchEmailRegDetailsFun();
    }
  }
  onProducerCodeKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
    }

  }
  onProducerCodeKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchEmailRegDetailsFun();
    }

  }
  onProducerCodeKeyUpForSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchEmailRegDetailsFun();
    }
  }
  onProducerCodeKeyDownForSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
    }
  }

  onProducerCodeKeyPressForSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchEmailRegDetailsFun();
    }

  }
--------------------------


    <input [maxlength]="6" formControlName="producerCode" id="producerCode"
                                        [ngClass]="{'highlight': (HighlightMan)}" name="producerCode"
                                        class="form-control" (keyup)="onProducerCodeKeyup($event)">


                                          

    onProducerCodeKeyup(event: any) {
    let value = event.target.value;
    // Convert full-width to half-width
    value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char: string) => {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
    });
    // Convert to uppercase
    value = value.toUpperCase();
    this.searchForm.patchValue({ producerCode: value });
  }

uppercase-input.directive.ts

  import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUppercaseInput]'
})
export class UppercaseInputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = this.el.nativeElement;
    const value = inputElement.value.toUpperCase();
    this.renderer.setProperty(inputElement, 'value', value);
  }
}
  
  

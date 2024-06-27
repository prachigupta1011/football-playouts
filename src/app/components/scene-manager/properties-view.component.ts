import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-properties-view',
  template: `
    <div *ngFor="let key of objectKeys(data)">
      <strong>{{ key }}:</strong>
      <ng-container *ngIf="key === 'children'; else normalKey">
        <div style="margin-left: 20px;">
          <div *ngFor="let child of data[key]; let i = index">
            <span>{{ i + 1 }}:{{ child.type }}</span>
          </div>
        </div>
      </ng-container>
      <ng-template #normalKey>
        <ng-container *ngIf="isObject(data[key]); else primitive">
          <div style="margin-left: 20px;">
            <app-properties-view [data]="data[key]"></app-properties-view>
          </div>
        </ng-container>
        <ng-template #primitive>{{ data[key] }}</ng-template>
      </ng-template>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      margin: 5px 0;
    }
  `]
})
export class PropertiesViewComponent {
  @Input() data: any;

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}

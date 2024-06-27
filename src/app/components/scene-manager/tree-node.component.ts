import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  template: `
    <div (click)="selectNode(node)" class="node">
      {{ node.name }}
    </div>
    <ul *ngIf="node.children && node.children.length > 0">
      <li *ngFor="let child of node.children">
        <app-tree-node [node]="child" (select)="selectNode($event)"></app-tree-node>
      </li>
    </ul>
  `,
  styles: [`
    .node {
      cursor: pointer;
      padding: 4px;
      border: 1px solid #ccc;
      margin: 2px;
    }
    ul {
      padding-left: 20px;
    }
  `]
})
export class TreeNodeComponent {
  @Input() node: any;
  @Output() select = new EventEmitter<any>();

  selectNode(node: any): void {
    if (node && node.data) {
      console.log("node",node);
      this.select.emit(node.data);
    } else {
      this.select.emit(node);
    }
  }
}

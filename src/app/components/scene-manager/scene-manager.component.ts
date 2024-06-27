import { Component, OnInit } from '@angular/core';
import { SceneManagerService } from './scene-manager.service';

@Component({
  selector: 'app-scene-manager',
  templateUrl: './scene-manager.component.html',
  styleUrls: ['./scene-manager.component.scss']
})
export class SceneManagerComponent implements OnInit {
  sceneData: any;
  selectedItem: any;

  constructor(private sceneManagerService: SceneManagerService) { }

  ngOnInit(): void {
    this.sceneManagerService.getSceneData().subscribe(data => {
      this.sceneData = this.buildTree(data);
    });
  }

  selectItem(item: any): void {
    this.selectedItem = item;
  }

  buildTree(element: any): any {
    return {
      name: element.type,
      data: element,
      children: element.children ? element.children.map((child: any) => this.buildTree(child)) : []
    };
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}

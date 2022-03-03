import { TabComponent } from './../tab/tab.component';
import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => {
      t.active = false;
    })
    tab.active = true;

    //相當於prevent default
    return false;
  }

}

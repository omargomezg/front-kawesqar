import {Component, OnInit} from '@angular/core';
import {ShortcutNavService} from '../../core/services/shortcut-nav.service';

@Component({
  selector: 'app-shotcut-nav',
  templateUrl: './shortcut-nav.component.html',
  styleUrls: ['./shortcut-nav.component.css']
})
export class ShortcutNavComponent implements OnInit {
  model = {
    'homeUrl': window.location.origin,
    'pathLvl1': [],
    'pathLvl2': []
  };

  constructor(private pathData: ShortcutNavService) {
  }

  ngOnInit() {
    this.pathData.currentPathLvl1.subscribe(path => this.model.pathLvl1 = path);
    this.pathData.currentPathLvl2.subscribe(path => this.model.pathLvl2 = path);
  }

}

import { Component, OnInit } from '@angular/core';
import {DataReceiverService} from "../../services/graph.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(private dataService:DataReceiverService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  code = 'function x() {\nconsole.log("Hello world!");\n}';
  isStdin = false;
  output = 'No Output Yet';

  constructor() { }


  ngOnInit() {
  }

  onCodeChange(code) {
    console.log(code);
  }

}

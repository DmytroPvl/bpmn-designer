import { Component } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';
import minimapModule from 'diagram-js-minimap';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  processName: string;

  constructor(private http: HttpClient){
    this.processName = "...";
  }
  ngAfterViewInit() {
    let modeler  = new Modeler({
      container: "#diagram",
      keyboard: {
        bindTo: window
      },
      additionalModules: [
        minimapModule
      ]
    });
    let self = this;
    const url = "https://v_nikonov_n:44367/api/process/ac21d39b-933d-4c6f-af4d-dc592175ea4f";
    this.http.get(url).subscribe((response:string) => {
      debugger;
        self.processName = response["name"];
        modeler.importXML(response["metaData"], (errors) => {
          if (errors) {
            alert(`Errors occured: ${errors}`)
          }
        });
      console.log(response);
    });
  }
}


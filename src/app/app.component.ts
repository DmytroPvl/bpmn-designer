import { Component } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ngAfterViewInit() {
    let modeler  = new Modeler({
      container: "#canvas",
      keyboard: {
        bindTo: window
      }
    });
    modeler.importXML(diagramXML, (errors) => {
      if (errors) {
        alert(`Errors occured: ${errors}`)
      }
    });
  }
}

let diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_143n5gv" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" name="start">
      <bpmn:outgoing>SequenceFlow_0lnh6es</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_0f1g25m" name="Task 1">
      <bpmn:incoming>SequenceFlow_0lnh6es</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1xp1jqd</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0lnh6es" sourceRef="StartEvent_1" targetRef="Task_0f1g25m" />
    <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_1f7xgtf" name="end">
      <bpmn:incoming>SequenceFlow_1xp1jqd</bpmn:incoming>
    </bpmn:intermediateThrowEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1xp1jqd" sourceRef="Task_0f1g25m" targetRef="IntermediateThrowEvent_1f7xgtf" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="180" y="145" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0f1g25m_di" bpmnElement="Task_0f1g25m">
        <dc:Bounds x="259" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0lnh6es_di" bpmnElement="SequenceFlow_0lnh6es">
        <di:waypoint x="209" y="120" />
        <di:waypoint x="259" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_1f7xgtf_di" bpmnElement="IntermediateThrowEvent_1f7xgtf">
        <dc:Bounds x="409" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="418" y="145" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1xp1jqd_di" bpmnElement="SequenceFlow_1xp1jqd">
        <di:waypoint x="359" y="120" />
        <di:waypoint x="409" y="120" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;

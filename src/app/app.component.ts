import { AgentCount } from './model/Agent-count.model';
import { AgentStatusEnum } from './model/agent.status';

import { Component, OnInit} from '@angular/core';
import {AgentServiceService} from './service/agent-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  objectKeys = Object.keys;
  title = 'enexseFrontEnd';
  totalAgent : number =0;
  totalAgentByStatus : AgentCount [] = [];
  agentByStatusStatic : any = AgentStatusEnum;
  constructor(private agentServiceService:AgentServiceService){
  }
  ngOnInit(): void {
    this.initData();
  }

   initData()
  {
     this.getTotalAgentCount();
     this.getTotalAgentCountByStatus();
  }
  getTotalAgentCount(){
      this.agentServiceService.getTotalAgent().subscribe((data:number)=>{
      console.log(data)
      this.totalAgent = data ;
    })
  }

  getTotalAgentCountByStatus(){
    this.agentServiceService.getTotalAgentByStatus().subscribe((data:AgentCount[])=>{
      console.log(data)
      this.totalAgentByStatus = data ;
      this.updateValues();

    })
  }

  updateValues(){
    const statisticAgent : any = this.agentByStatusStatic;
    statisticAgent.NONE.total = this.totalAgent;

    this.totalAgentByStatus.forEach((element :AgentCount) => {
      statisticAgent[element.status]['total']= element.total;
    });
    this.agentByStatusStatic = statisticAgent;

    console.log(this.agentByStatusStatic)

  }
}

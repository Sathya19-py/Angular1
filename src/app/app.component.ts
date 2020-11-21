import { Identifiers } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Security';
  
  public home_status:boolean = true;
  public agent_status:boolean = true;
  public option:string;
  
  
  public open(option)
  {
    if(option == 'home'){
      console.log(option);
    };

    if(option == 'agent'){
      console.log(option);
    };

    if(option == 'defence'){
      console.log(option);
    };

    if(option == 'admin'){
      console.log(option);
    };
    
  };
}

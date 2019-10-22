import React from 'react';
import './App.css';
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import { Inject, Month,ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
  
    
  public render() {
    
    return <ScheduleComponent currentView='Month'>
       
    
     <ViewsDirective>

        <ViewDirective option='Month'/>
        
    
    </ViewsDirective>

   <Inject services={[Month]}/>

</ScheduleComponent>

  }

}

export default App;

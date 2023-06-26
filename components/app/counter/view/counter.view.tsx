import { inject, observer } from "mobx-react";
  import react from "react";
  import { CounterController } from "../controller/counter.controller";
  
  interface State {
    userName: string;
  }
  
  type Props = {
    counterController?: CounterController;
  };
  
  @inject("counterController")
  @observer
  export class CounterView extends react.Component<Props> {
    render() {
      const { counterController } = this.props;
      const buttonHandler = (event: any) => {
        event.preventDefault();
        if (counterController) counterController.increase();
      };
      if (counterController) {
        return (
          <div className="flex justify-center p-2 " >
            
           <div className="p-2 ">
           <div className="flex flex-col items-center justify-center p-4 text-4xl font-semibold text-slate-100 ">
              <p>Browse Featured Experts</p>
              
           </div>
           <div className="flex-col m-2 rounded-2xl">
              <p className="text-center text-9xl text-slate-100 bg-zinc-900">{counterController.getValue}</p>

                <div
                  onClick={buttonHandler}
                  className="text-center text-blac bg-cyan-500">
        
                Counter+
              </div>
           </div>
           </div>
          </div>
        );
      }
      return <div>Loading...</div>;
    }
  }
  
  
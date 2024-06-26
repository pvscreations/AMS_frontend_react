import Navigate from "../screens/Nav";
import Update from "../screens/Update";
import Identify from "../screens/identify";
import { useState ,useEffect} from "react";
import {Canvas} from "../screens/Canvas";
import {Service} from "../screens/service";
const Home=(prop)=>{
    const [service,setService]=useState(false);//data
    const [screen,setScreen]=useState(2);//screen
    const [verify,setVerify]=useState(1);//capturing selction
    const [can,setCan]=useState(0);

    console.log(prop)
    useEffect(() => {
        console.log(screen);
        if (screen === 1 || screen === 2) {
            setCan(1);
        }
       
        
    }, [screen]);
    // if (screen==1 || screen==2){
    //     setCan(1)
    // }
    // var content;
    // if (screen==1){
    //     content=<Canvas/>
    // }
    // else if(screen==2){
    //     content=<Canvas/>
    // }
    // else{
    //     content=<Service close={setService} ver={setVerify}/>
    // }
    return(
        <>
        {
           service ?
                (
                    verify?
                  
                        ( can?
                            <Canvas act={screen} check={setVerify} close={setService} data={service} can={setCan}/>
                            :
                            <Service close={setService} ver={setVerify} data={service}/>


                        )
                    :
                        <Canvas check={setVerify} act={verify} data={service} can={setCan}/>
                )
              
            :
                (<>
                    <Navigate screen={setScreen} login={prop.log}/>
                    {
                        screen?
                            <Update log={prop.log} data={setService} togle={screen}/>
                        :
                            <Identify data={setService}/>
                            
                    
                    }
                    
                 </> 
                )

        }
        
        </>
    )

};
export {Home};
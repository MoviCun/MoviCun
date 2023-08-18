import React, { Component} from "react"
import GoogleMaps from "simple-react-google-maps"

export default class Maps extends Component{
    
    render(){
        var [xlatitude] = "21.1539585";
        var [xlongitude] = "-86.9128913";

        if(!navigator.geolocation){
            alert("No se puede obtener la geolocation");
            throw("No se puede obtener la geolocation");
          }else{
            navigator.geolocation.getCurrentPosition(
                ({coords})=>{
                xlatitude = coords.latitude;
                xlongitude = coords.longitude;
                console.log([coords.latitude]);
                console.log([coords.longitude]);
                }
            )
          }
        return(
                <>
                <GoogleMaps 
                    apiKey={"AIzaSyDZNPb4fbG_45RiEKRd2k4sPNOsVE1wCpA"} 
                    style={{containerStyle: "initial", with:"70%", overflow: "inherit", position: "initial"}}
                    containerStyle = {"initial"}
                    zoom={18}
                    center={{lat:21.1539585,lng:-86.9128913}}
                    marker={{lat:21.1539585,lng:-86.9128913}}
                    >
                </GoogleMaps>
                
                </>
        );
    } 
}
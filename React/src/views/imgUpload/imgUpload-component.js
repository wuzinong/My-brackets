
import React,{Component} from 'react';
import style from './imgUpload.scss';
// import 'react-image-crop/lib/ReactCrop.scss';
import ReactCrop,{ makeAspectCrop } from 'react-image-crop';


class ImgUpload extends Component{
    //https://devarchy.com/react/library/react-image-crop
    constructor(props){
        super(props);
        this.state = {
            crop: {
                x: 20,
                y: 10,
                width: 30,
                height: 10
              }
        };
    }
    
    onChange(crop){
        this.setState({crop});
        console.log(this)
    }
     
 
    render(){
        
        return (
            <div>
               <ReactCrop 
                   src={require("../../assets/images/test.jpg")}
                   onChange={()=>{this.onChange}}
                   crop = {this.state.crop}
                   />
            </div>
        );
    }
}

export default ImgUpload;
import React from 'react'; 
import {UserProfileForm} from '../../components/Forms/index';

class UserProfileComponent extends React.Component{
   constructor(props:any){
     super(props);
   }
   render(){
       return (
        <div className = "container">
            <UserProfileForm/>
        </div>
       )
   }
}

export default UserProfileComponent;
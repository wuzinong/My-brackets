import React from 'react'; 
import {UserProfileForm} from '../../components/Forms/index';
import {UserProfile} from '../../types';

class UserProfileComponent extends React.Component{
   constructor(props:any){
     super(props);
   }
   render(){
       let userInfo:UserProfile = {
            userName: 'test',
            email: 'wuzinong@gmail.com',
            firstName: '232323',
            lastName: '22222',
            displayName: 'tset',
            country: 'China',
            language: 'English',
            mobile: '223123123123',
            showSpinner:true
       }
       return (
        <div className = "container">
            <UserProfileForm {...userInfo }/>
        </div>
       )
   }
}

export default UserProfileComponent;
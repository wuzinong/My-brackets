import React from 'react';
import {Link} from 'react-router-dom';
import {StoreState,UserProfile} from 'types';
import './index.scss';
import {emailReg} from '../../../libs/RegExpression';


interface IUserProfileFormProps extends UserProfile{
    //updateUserProfile:(u:UserProfile)=>void;
}

interface IValidation{
    value:string;
    isValid:boolean;
    message:string;
}

interface IUserProfileFormState {
    userName:IValidation;
    email: IValidation;
    firstName: IValidation;
    lastName: IValidation;
    displayName: IValidation;
    country: IValidation;
    language: IValidation;
    mobile: IValidation;
}

class UserProfileForm extends React.Component<IUserProfileFormProps, IUserProfileFormState>{
    constructor(props: IUserProfileFormProps) {
        super(props);
        this.state = {
            userName:{
                value:this.props.userName,
                isValid:true,
                message:""
            },
            email:{
                value:this.props.email,
                isValid:true,
                message:"",
            },
            firstName:{
                value:this.props.firstName,
                isValid:true,
                message:"",
            },
            lastName:{
                value:this.props.lastName,
                isValid:true,
                message:"",
            },
            displayName:{
                value:this.props.displayName,
                isValid:true,
                message:"",
            },
            country:{
                value:this.props.country,
                isValid:true,
                message:"",
            },
            language:{
                value:this.props.language,
                isValid:true,
                message:"",
            },
            mobile:{
                value:this.props.mobile,
                isValid:true,
                message:"",
            }
        }
    }

    handleValueChange = (name: string, event: any) => {
        let result:any = this.formValidation(name,event.target.value);
        switch (event.target.tagName) {
            case 'SELECT':
            case 'INPUT': {
 
                this.setState({
                    ...this.state,
                    ...result
                })
            }
            default: break;
        }
    }
    formValidation=(fieldName:string,value:any):any=>{
        let tempObj = {
            value:value,
            isValid:true,
            message:""
        }
        
        switch (fieldName){
            case "userName":{ 
                if(value===""){
                    tempObj.message = "please enter your user name";
                    tempObj.isValid = false;
                } else {
                    if(value.length<6){
                        tempObj.message = "please enter at leaset 6 charactors";
                        tempObj.isValid = false;
                    }
                    else{
                        tempObj.message = "";
                        tempObj.isValid = true;
                    }
                }
            } break;
            case "email":{
                if(value === ""){
                    tempObj.message = "please enter your email";
                    tempObj.isValid = false;
                }else{
                    if(emailReg.test(value)){
                        tempObj.message = "";
                        tempObj.isValid = true;
                    }else{
                        tempObj.message = "please enter a valid email address";
                        tempObj.isValid = false;
                    }
                }
            } break;
            case "firstName":{
                if(value === ""){
                    tempObj.message = "please enter your fristName";
                    tempObj.isValid = false;
                }else{
                        tempObj.message = "";
                        tempObj.isValid = true;
                }
            } break;
            case "lastName":{
                if(value === ""){
                    tempObj.message = "please enter your lastName";
                    tempObj.isValid = false;
                }else{
                        tempObj.message = "";
                        tempObj.isValid = true;
                }
            } break;
            case "displayName":{
                if(value === ""){
                    tempObj.message = "please enter your displayName";
                    tempObj.isValid = false;
                }else{
                        tempObj.message = "";
                        tempObj.isValid = true;
                }
            } break;
            default:
              break;
        }
        return {
            [fieldName]:{
                ...tempObj
            }
        };
    }

    componentWillReceiveProps(props:any){
        this.setState({...props})
    }

    submitForm = (e: any):void => {
        let isValid = true;
        Object.keys(this.state).forEach((key)=>{
            let state:any = this.state;
            isValid = isValid && state[key].isValid;
        }); 

        let profile = {
            userName:this.state.userName.value,
            email:this.state.email.value,
            firstName:this.state.firstName.value,
            lastName:this.state.lastName.value,
            displayName:this.state.displayName.value,
            language:this.state.language.value,
            country:this.state.country.value,
            mobile:this.state.mobile.value
        }
        if(isValid){
            //this.props.updateUserProfile(profile);
            alert("validation passed")
        }
 
    }

    render() {
        return(
            <form action="">
                <h1>gu, xiehai</h1>
                <hr />
                <h2>Edit profile</h2>
                <div className="row">
                    <div className="col-md-6">
                        You can change your name and details in the fields below.
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-area">
                        <label htmlFor="">User name</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input id="userName" value={this.state.userName.value} className="form-control" type="text" onChange={this.handleValueChange.bind(this, 'userName')} />
                                {!this.state.userName.isValid ? <label htmlFor="userName" className="form-tip error-info">{this.state.userName.message}</label>:null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">Email address*</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input id="email" value={this.state.email.value} className="form-control" type="text" onChange={this.handleValueChange.bind(this, 'email')} />
                                {!this.state.email.isValid ? <label htmlFor="email" className="form-tip error-info">{this.state.email.message}</label>:null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">First name*</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input value={this.state.firstName.value} className="form-control" type="text" onChange={this.handleValueChange.bind(this, 'firstName')} />
                                {!this.state.firstName.isValid ? <label htmlFor="firstName" className="form-tip error-info">{this.state.firstName.message}</label>:null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">Last name*</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input value={this.state.lastName.value} className="form-control" type="text" onChange={this.handleValueChange.bind(this, 'lastName')} />
                                {!this.state.lastName.isValid ? <label htmlFor="lastName" className="form-tip error-info">{this.state.lastName.message}</label>:null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">Display name</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input value={this.state.displayName.value} className="form-control" type="text" onChange={this.handleValueChange.bind(this, 'displayName')} />
                                {!this.state.displayName.isValid ? <label htmlFor="displayName" className="form-tip error-info">{this.state.displayName.message}</label>:null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">Country*</label>
                        <div className="row">
                            <div className="col-md-6">
                                <select value={this.state.country.value} className="form-control" name="" id="" onChange={this.handleValueChange.bind(this, 'country')}>
                                    <option value="China">China</option>
                                    <option value="Norway">norway</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">Language</label>
                        <div className="row">
                            <div className="col-md-6">
                                <select value={this.state.language.value} className="form-control" onChange={this.handleValueChange.bind(this, 'language')}>
                                    <option value="English">English-English</option>
                                    <option value="Chinese">Chinese</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <label htmlFor="">Phone number</label>
                        <div className="row">
                            <div className="col-md-6">
                                <input value={this.state.mobile.value} className="form-control" type="text" onChange={this.handleValueChange.bind(this, 'mobile')} />
                            </div>
                            <div className="col-md-6">
                                <p>Phone number should start with country code and preferably be a mobile phone number.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-area">
                        <button type="button" onClick={this.submitForm} className="btn btn-primary">SAVE CHANGES</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="btn btn-cancel" to='/'>CANCEL</Link>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserProfileForm;
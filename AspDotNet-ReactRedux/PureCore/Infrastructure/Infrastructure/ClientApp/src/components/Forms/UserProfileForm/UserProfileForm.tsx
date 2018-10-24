import React from 'react';

interface UserProfileFormProps{
    
}

interface UserProfileFormState{
   UserName:string;
   Email:string;
   FirstName:string;
   LastName:string;
   DisplayName:string;
   Country:string;
   Language:string;
   Mobile:string;
}

class UserProfileForm extends React.Component<UserProfileFormProps,UserProfileFormState>{
    constructor(props:any){
        super(props);
        this.state = {
            UserName:"Bran",
            Email:"wuzinong@gmail.com",
            FirstName:"",
            LastName:"",
            DisplayName:"",
            Country:"China",
            Language:"",
            Mobile:"",
        };
    }
    handleValueChange = (name:string,event:any)=>{
        debugger;
        console.log(name);
        console.log(event.target.tagName)
        console.log(event.target.value)
        switch (event.target.tagName){
            case "INPUT":
            case "SELECT":{
                this.setState({
                    ...this.state,
                    [name]:event.target.value
                  });
            }
            default: break;
        }
    }

    submitForm = (e:any)=>{
        console.log(e)
    }
    render(){
        let {UserName,Email,FirstName,LastName,DisplayName,Country,Language,Mobile} = this.state;
        return (
            <form action="">
               <h1>gu, xiehai</h1>
               <hr/>
               <h2>Edit profile</h2>
               <div className="row">
                  <div className="col-md-6">
                    You can change your name and details in the fields below.
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                      <label htmlFor="">User name</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input value={UserName} className="form-control" type="text" onChange={this.handleValueChange.bind(this,'UserName')}/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Email address*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input value={Email} className="form-control" type="text" onChange={this.handleValueChange.bind(this,'Email')}/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">First name*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input value={FirstName} className="form-control" type="text" onChange={this.handleValueChange.bind(this,'FirstName')}/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Last name*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input value={LastName} className="form-control" type="text"  onChange={this.handleValueChange.bind(this,'LastName')}/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Display name</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input value={DisplayName} className="form-control" type="text"  onChange={this.handleValueChange.bind(this,'DisplayName')}/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Country*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <select value={Country} className="form-control" name="" id=""  onChange={this.handleValueChange.bind(this,'Country')}>
                               <option value="China">China</option>
                               <option value="Norway">norway</option>
                            </select>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Language</label>
                      <div className="row">
                        <div className="col-md-6">
                            <select value={Language} className="form-control"  onChange={this.handleValueChange.bind(this,'Language')}>
                               <option value="English">English-English</option>
                               <option value="Chinese">Chinese</option>
                            </select>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Phone number</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input value={Mobile} className="form-control" type="text"  onChange={this.handleValueChange.bind(this,'Mobile')}/>
                        </div>
                        <div className="col-md-6">
                           <p>Phone number should start with country code and preferably be a mobile phone number.</p>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <button type="button" onClick ={this.submitForm} className="btn btn-primary">SAVE CHANGES</button>
                      &nbsp;&nbsp;&nbsp;&nbsp;<button type="reset" className="btn btn-cancel">CANCEL</button>
                  </div>
               </div>
            </form>
        )
    }
}

export default UserProfileForm;
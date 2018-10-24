import React from 'react';

class UserProfileForm extends React.Component{
    constructor(props:any){
        super(props);
        // this.state = {
        //     UserName:"Bran",
        //     Email:"wuzinong@gmail.com",
        //     FirstName:"",
        //     LastName:"",
        //     DisplayName:"",
        //     Country:"",
        //     Language:"",
        //     Mobile:"",
        // };
    }
    handleValueChange = ()=>{

    }

    submitForm = (e:any)=>{
        console.log(e)
    }
    render(){
        // let {UserName,Email,FirstName,LastName,DisplayName,Country,Language,Mobile} = this.state;
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
                            <input name="username" className="form-control" type="text"/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Email address*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="email"/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">First name*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="text"/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Last name*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="text"/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Display name</label>
                      <div className="row">
                        <div className="col-md-6">
                            <input className="form-control" type="text"/>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <label htmlFor="">Country*</label>
                      <div className="row">
                        <div className="col-md-6">
                            <select className="form-control" name="" id="">
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
                            <select className="form-control" name="" id="">
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
                            <input className="form-control" type="text"/>
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
import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import configureStore from './redux/store/configureStore';
import {AppContainer} from 'react-hot-loader';
import App from './router';
import './assets/styles/site.scss'

// ReactDOM.render(
//     <Home/>,
//     document.getElementById("container")
// )

const store = configureStore();

if(process.env.NODE_ENV==='development'){
  const render = (Component:any)=>{
     ReactDOM.render(
      <AppContainer>
         <Component/>
      </AppContainer>
      ,document.getElementById('container') as HTMLElement
     )
  };
  render(App);
  if((module as any).hot){
    (module as any).hot.accept()
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container') as HTMLElement
  );
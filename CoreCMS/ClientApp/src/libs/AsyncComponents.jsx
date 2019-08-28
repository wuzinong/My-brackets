import * as React from "react";


export default function asyncComponent(getComponent){
    class AsyncComponent extends React.Component{

        static isMounted = false;

        constructor(props) {
            super(props);

            this.state = {
                Component: null
            };
        }

        async componentDidMount(){
            AsyncComponent.isMounted = true;
            const {default: Component} = await getComponent();
            if(AsyncComponent.isMounted){
                this.setState({
                    Component: Component
                });
            }

        }
        componentWillUnmount(){
            AsyncComponent.isMounted = false;
        }


        render() {
            const C = this.state.Component;
            return C ? <C {...this.props}/> : <div>Loading</div>
        }
    }
    return AsyncComponent;

}
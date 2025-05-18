import React,{Component} from "react";


 class ErrorBoundries extends Component{

    constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    componentDidCatch(error, info){
        console.log(error,info)

    };

    resetError = () => {
    this.setState({ hasError: false });
  };

   


    render(){
        if(this.state.hasError){

            return (<div>
                <p style={{fontSize:"60px"}}>An Error was Detected !</p>
                          <button onClick={this.resetError} style={{ fontSize: "20px" }}>
                             Retry !
          </                button>

                </div>);
           
            
        }
        else

        return this.props.children
    }
    
}

export default ErrorBoundries;


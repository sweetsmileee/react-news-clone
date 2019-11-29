import React from 'react';  
import './style.css';  

class Popup extends React.Component {  

    state={
        input: "",
        isHidden: true
    }
    
    handleChange = (event) =>{
        this.setState({
            input: event.target.value,

        })
    }

    checkVis = () =>{
        if(!this.state.isHidden){
            return "hide"
        }
    }

    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    hideAndSwap = () => {
    this.toggleHidden();
    this.props.changePopUp();
    }

    closePopup = () => {
        this.props.closePopup();
    }

  render() {  
return (  
    <div>
        <div className='popup'>  
            <div className='popup\_inner'>
                <div className="UIText">  
                    <h1>{this.props.text[0]}</h1> 
                <div className="UIComponents">
                    <button onClick={this.props.closePopup}>X</button>  
                    <div className="SubmitButton">
                    <button className={this.checkVis()} onClick={this.hideAndSwap}>Submit Email</button>
                    </div>
                    <input
                     type="text"
                    value={this.state.input}
                    onChange={this.handleChange}/>
                    </div>
                </div>
                
            </div>  
        </div> 
    </div> 
            );  
        
    
    }  
}  

export default Popup;
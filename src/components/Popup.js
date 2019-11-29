import React, { Component } from 'react';  
import Popup from './Popupinner';  


class App extends Component {  

  constructor(props){  
super(props);  
this.state = { showPopup: false,
popUpText: ["Click HERE to suscribe and receive the latest articles", "Thank you for submitting!"] };  

}  
  toggleWindow(){
    this.setState({
      showWindow: !this.state.Window
    })
  }

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  

  changePopUp() {
    this.setState({
      popUpText: [this.state.popUpText[1],
                  this.state.popUpText[0]]
    })

    console.log(this.state.popUpText);
    
  }

  submitButtonHide() {
    this.setState({
      submitButton: !this.state.isHiddfen
    })
  }

  closeButton() {
    this.setState({
      closeButton: this.state.close 
    })
  }

  render() {  
return (  
<div>  
  <div className="Title">
<a onClick={this.togglePopup.bind(this)}><h1 className="subscribeLink"> Click HERE to suscribe and receive the latest articles </h1>  </a>
  </div>

{this.state.showPopup ?  
<Popup  
          text={this.state.popUpText}  
          closePopup={this.togglePopup.bind(this)}  
          changePopUp= {() => {this.changePopUp()}}
/>  
: null  
}  
</div>  

);  
}  
}  

export default App;
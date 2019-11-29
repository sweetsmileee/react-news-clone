import React, { Component } from 'react';  
import Popup from './Popupinner';  


class App extends Component {  

  constructor(props){  
super(props);  
this.state = { showPopup: false,
popUpText: ["Submit your email to receive special dirt on codeNation", "Thank you for submitting!"] };  

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

  render() {  
return (  
<div>  
  <div className="Title">
<a onClick={this.togglePopup.bind(this)}><h1 className="subscribeLink"> Click HERE to receive special dirt on codeNation </h1>  </a>
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
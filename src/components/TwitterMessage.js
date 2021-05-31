import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }


  handleMessege = (e) => {
    this.setState({message: e.target.value})
  }


  handleCharactorCount = () => {
    //console.log(this.props.maxChars);
    let str = this.state.message
    let charCount = this.props.maxChars - str.length
    console.log(charCount);
      return charCount
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} type="text" name="message" id="message" onChange={this.handleMessege} />
        {this.handleCharactorCount()}
        {this.charCount}
      </div>
    );
  }
}

export default TwitterMessage;

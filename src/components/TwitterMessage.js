import React from "react";
import App from "../App";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remaining: props.maxChars
    };
  }

  onTyping = e => {
    // e.persist();
    console.log(this.state.remaining);
    console.log(this.state.message);
    this.setState({
      message: e.target.value,
      remaining: this.props.maxChars - e.target.value.length
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.onTyping}
        />
        <strong>{this.state.remaining}</strong>
      </div>
    );
  }
}

export default TwitterMessage;

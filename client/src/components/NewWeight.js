import React from "react";

class NewWeight extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
   return(
    <button onClick={() => this.props.onClick()}>Post</button>
   );
  }
  
}

export default NewWeight;
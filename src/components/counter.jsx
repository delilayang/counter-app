import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   // count: this.props.value,
  //   value: this.props.counter.value, //props is read-only
  //   // imageUrl:
  //   //   "https://i.pinimg.com/564x/06/f9/57/06f957389f1b933d835fa2d271af4b1e.jpg",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillMount() {
    console.log("counter - unmount");
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // Event handler: Use arrow function instead of constructor
  //   handleIncrement = (product) => {
  //     console.log(product);
  //     this.setState({ count: this.props.counter.count + 1 });
  //     // obj.method();
  //     // function();
  //   };
  // handleIncrement = () => {
  //   this.setState({ value: this.props.counter.value + 1 });
  //   // obj.method();
  //   // function();
  // };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    // let classes = this.getBadgeClasses();
    // console.log("props", this.props);
    console.log("Counter - rendered");
    const { onDelete, onIncrement } = this.props;
    return (
      <div>
        {/* <h4> {this.props.id}</h4> */}
        {/* <img src={this.props.counter.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()} </span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn badge-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.props.counter.tags.length === 0 && "Please create a new tag! "}
        {this.renderTags()} */}
      </div>
    );
  }

  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>There are no tags! </p>;
    return (
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    // const x = <h1>Zero</h1>;
    // return value === 0 ? x : value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

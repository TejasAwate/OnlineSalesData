import React, {Component} from "react";
import "../../App.css";

class Summary extends Component {

  render() {
    return (
        <table className="table table-success">
          <thead>
            <tr className="thead-light">
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACTED</td>
              <td>{this.props.actedLen}</td>
            </tr>
            <tr>
              <td>REJECTED</td>
              <td>{this.props.rejected}</td>
            </tr>
            <tr>
              <td>UNSEEN</td>
              <td>{this.props.unseenLen}</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default Summary;

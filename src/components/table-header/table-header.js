import React, {Component} from "react";
import "../../App.css";

class TableHeader extends Component {

  render() {
    return (
        <tr className="thead-light">
            <th>Creation Date</th>
            <th>Last Update</th>
            <th>Type</th>
            <th>Status</th>
            <th>Message</th>
            <th>Detailed Message</th>
        </tr>
    );
  }
}

export default TableHeader;

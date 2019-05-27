import React, {Component} from "react";
import "../../App.css";
import moment from "moment";

class TableRow extends Component {

  formattedCreationDate = moment(this.props.creationDate).format('LLLL');
  formattedLastUpdatedDate = moment(this.props.creationDate).format('LLLL');

  render() {
    return (
        <tr>
            <td>{this.formattedCreationDate}</td>
            <td>{this.formattedLastUpdatedDate}</td>
            <td>{this.props.type}</td>
            <td>{this.props.status}</td>
            <td>{this.props.message}</td>
            <td>
            <button
                type="button"
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title={this.props.rollUpMessage}
            >
                View
            </button>
            </td>
        </tr>
    );
  }
}

export default TableRow;

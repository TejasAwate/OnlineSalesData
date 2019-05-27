import React, {Component} from "react";
import "./App.css";

import Summary from "./components/summary/summary.js";
import TableRow from "./components/table-row/table-row.js";
import TableHeader from "./components/table-header/table-header.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      actedLen: 0,
      rejectedLen: 0,
      unseenLen: 0
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch("https://www.mocky.io/v2/5caec4f2340000b321ab6de9")
      .then(results => results.json())
      .then((results) => {
        this.setState({items: results.actions});
        
        var actedFilter = this.state.items.filter(function (str) {
          return str.status.includes("ACTED");
        });
        this.setState({actedLen: actedFilter.length});

        var rejectedFilter = this.state.items.filter(function (str) {
          return str.status.includes("REJECTED");
        });
        this.setState({rejectedLen: rejectedFilter.length});
        
        var unseenFilter = this.state.items.filter(function (str) {
          return str.status.includes("UNSEEN");
        });
        this.setState({unseenLen: unseenFilter.length});    
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Online Sales Data</h1> 
        </div>
        <table className="table">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              return (
                <TableRow 
                  creationDate={item.creationDate} 
                  lastUpdate={item.lastUpdate} 
                  type={item.type} 
                  status={item.status} 
                  message={item.message} 
                  rollUpMessage={item.metadata.rollUpMessage}
                  />
              );
            })}
          </tbody>
        </table>
        <hr/><hr/>
        <h4>Summary Box</h4>
        <Summary 
          actedLen={this.state.actedLen} 
          rejected={this.state.rejectedLen} 
          unseenLen={this.state.unseenLen}/>
      </div>
    );
  }
}

export default App;

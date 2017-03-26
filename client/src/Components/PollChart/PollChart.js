import React from "react";
import { ProgressBar, Text } from "@blueprintjs/core";
import { maxBy } from "lodash";

class PollChart extends React.Component {
  _getRatio(numerator) {
    return numerator / this.props.totalVotes;
  }

  _renderStatus() {
    if (this.props.inProgress) {
      return <Text>Voting in Progress...</Text>;
    } else {
      let winner = this.props.rows.reduce((winner, row) => {
        return maxBy([winner, row], item => item.votes);
      });
      return <Text>This story is {winner.choice}</Text>;
    }
  }

  _renderRows() {
    return this.props.rows.map(row => {
      return (
        <div key={row.choice}>
          <div className="col-sm-3">
            <Text>{row.choice}</Text>
          </div>
          <div className="col-sm-9">
            <ProgressBar
              value={this._getRatio(row.votes)}
              className={this._getClassWithProgress()}
            />
          </div>
        </div>
      );
    });
  }

  _getClassWithProgress() {
    return this.props.inProgress ? "" : "pt-no-stripes";
  }

  render() {
    return (
      <div>
        {this._renderStatus()}
        {this._renderRows()}
      </div>
    );
  }
}

PollChart.propTypes = {
  rows: React.PropTypes.array,
  totalVotes: React.PropTypes.number,
  inProgress: React.PropTypes.bool
};

export default PollChart;

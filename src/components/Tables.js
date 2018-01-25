import React, { Component } from 'react';
import {Table, TableHeader, TableBody, TableHeaderColumn,
    TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkbox: {
    marginBottom: 16,
  }
};

class Tables extends Component {

    symbolClicked(companySymbol) {
        this.props.symbolClicked(companySymbol);
    }

    addTableRows() {
        return this.props.companies.map((company, num = 0) => {
            return (
            <TableRow key={"key-" + num}>
                <TableRowColumn>
                    <Checkbox
                        name={company.symbol}
                        style={styles.checkbox}
                        onClick={() => this.symbolClicked(company.symbol)}
                      />
                </TableRowColumn>
                <TableRowColumn>{company.symbol}</TableRowColumn>
                <TableRowColumn>{company.companyName}</TableRowColumn>
                <TableRowColumn>{company.close}</TableRowColumn>
                <TableRowColumn>{company.adj}</TableRowColumn>
            </TableRow>)
        })
    }

    render() {
        return (
          <div>
          <Table>
            <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}
                  enableSelectAll={false}>
              <TableRow>
                  <TableHeaderColumn>Select</TableHeaderColumn>
                  <TableHeaderColumn>Symbol</TableHeaderColumn>
                  <TableHeaderColumn>Company Name</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>showcheck
                  <TableHeaderColumn>Percentage</TableHeaderColumn>
              </TableRow>
            </TableHeader>
              <TableBody displayRowCheckbox={false}>
                  {this.props.companies !== undefined ? this.addTableRows() : ""}
            </TableBody>
          </Table>
          </div>
        );
    }
}

export default Tables;

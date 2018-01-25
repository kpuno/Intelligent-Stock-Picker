import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    customWidth: {
      width: '200px',
    }
};

class Toolbars extends Component {
    constructor(props) {
        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        super(props);
        this.state = {
            minDate: minDate,
            maxDate: maxDate,
            frequency: 1,
            weight: '',
            capital: 0
        }
    }

    handleChangeMinDate = (event, date) => this.setState({minDate: date});
    handleChangeMaxDate = (event, date) => this.setState({maxDate: date});
    frequencyChange = (event, index, frequency) => this.setState({frequency});
    weightChange = (event, index, weight) => this.setState({weight});
    capitalChange = (event, capital) => this.setState({capital});

    render() {
        return (
          <div>
            <Toolbar>
                <ToolbarGroup>
                    <DatePicker
                    onChange={this.handleChangeMinDate}
                    autoOk={false}
                    floatingLabelText="Start Date"
                    defaultDate={this.state.minDate}
                    disableYearSelection={this.state.disableYearSelection}
                    style={styles.customWidth}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <DatePicker
                    onChange={this.handleChangeMaxDate}
                    autoOk={this.state.autoOk}
                    floatingLabelText="End Date"
                    defaultDate={this.state.maxDate}
                    disableYearSelection={false}
                    style={styles.customWidth}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField
                    hintText="$1000"
                    floatingLabelText="Initial Capital"
                    onChange={this.capitalChange}
                    style={styles.customWidth}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <SelectField
                    floatingLabelText="Frequency"
                    value={this.state.frequency}
                    onChange={this.frequencyChange}
                    style={styles.customWidth}
                    >
                        <MenuItem value={1} primaryText="10" />
                        <MenuItem value={2} primaryText="20" />
                        <MenuItem value={3} primaryText="30" />
                        <MenuItem value={4} primaryText="40" />
                        <MenuItem value={5} primaryText="50" />
                        <MenuItem value={6} primaryText="60" />
                        <MenuItem value={7} primaryText="70" />
                        <MenuItem value={8} primaryText="80" />
                        <MenuItem value={9} primaryText="90" />
                    </SelectField>
                </ToolbarGroup>
                <ToolbarGroup>
                <SelectField
                    value={this.state.weight}
                    onChange={this.weightChange}
                    floatingLabelText="Change Weight"
                    >
                    <MenuItem value={"Share Weighted"} primaryText="Share Weighted" />
                    <MenuItem value={"Money Weighted"} primaryText="Money Weighted" />
                </SelectField>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Submit" primary={true} onClick={()=>this.props.onToolbarClick(this.state)}/>
                </ToolbarGroup>
            </Toolbar>
          </div>
        );
    }
}

export default Toolbars;

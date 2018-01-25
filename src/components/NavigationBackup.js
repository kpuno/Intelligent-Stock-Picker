import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const styles = {
    title: {
        cursor: 'pointer',
        fontSize: '0.65em',
    },
};

class Navigation extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title = {<span style={styles.title}>INTELLIGENT STOCK PICKER</span>}
                    iconElementLeft = {<div></div>}
                    iconElementRight = {<div></div>}/>
            </div>
        );
    }
}

export default Navigation;

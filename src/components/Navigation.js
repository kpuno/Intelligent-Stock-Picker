import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import SignIn from '../containers/auth/SignIn';
import * as actions from '../actions/authActions';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    title: {
        cursor: 'pointer',
        fontSize: '0.65em',
    },
    margin: {
        marginTop: '5px'
    }
};

const customContentStyle = {
  width: '25em',
  maxWidth: 'none',
};

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            menuOpen: false,
        }

        this.userMenu = this.userMenu.bind(this);
        this.signOut = this.signOut.bind(this);
        this.clickRegister = this.clickRegister.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticated !== false) {
            this.setState({ open: false});
        }
    }

    handleTouchTap() {
        browserHistory.push('/');
    }

    handleOpen = () => {
        if(this.props.authenticated) {
            // this.userMenu();
        }
        else
            this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    handleMenuTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
          menuOpen: true,
          anchorEl: event.currentTarget,
        });
      };

      handleRequestClose = () => {
        this.setState({
          menuOpen: false,
        });
      };

    clickRegister() {
        this.setState({open: false});
        browserHistory.push('/signup');
        // browserHistory.push('/signup').then(() => this.setState({open: false}));
    }

    userMenu() {
        return (
            <div style={styles.margin}>
                <FlatButton
                  secondary={true}
                  onClick={this.handleMenuTouchTap}
                  label={this.props.user}
                />
                <Popover
                  open={this.state.menuOpen}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  onRequestClose={this.handleRequestClose}
                >
              <Menu>
                <MenuItem primaryText="Dashboard" onClick={() => {browserHistory.push('/dashboard'); this.setState({menuOpen: false})}} />
                <MenuItem primaryText="Sign out" onClick={this.signOut}/>
              </Menu>
            </Popover>
          </div>
        )
    }

    signOut() {
        this.props.deAuthUser();
        browserHistory.push('/');
    }

    render() {
        const action = [
          <FlatButton
            label="Register"
            primary={true}
            onClick={this.clickRegister}
          />,
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />
        ];
        return (
            <div>
                <AppBar
                   title={<span style={styles.title}>INTELLIGENT STOCK PICKER</span>}
                   onTitleTouchTap={this.handleTouchTap}
                   iconElementLeft={<div></div>}
                   iconElementRight={this.props.authenticated ? this.userMenu() : <FlatButton onClick={this.handleOpen} label="Login/Signup" />}
                 />
                 <Dialog
                   title="Sign In"
                   actions={action}
                   modal={false}
                   open={this.state.open}
                   onRequestClose={this.handleClose}
                   contentStyle={customContentStyle}
                 >
                   <SignIn />
                 </Dialog>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated,
		user: state.user.email
	};
}

export default connect(mapStateToProps, actions)(Navigation);

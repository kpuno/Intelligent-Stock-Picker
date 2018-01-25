import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    spacer: {
        height: '100px'
    },
    checkbox: {
      marginBottom: 16,
    }
}

class CardChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle,
            text: this.props.text,
            name: this.props.name,
            open: false
        }

        this.cbOnClick = this.cbOnClick.bind(this);
    }

    handleOpen = () => {
        this.setState({open: true});
      };

      handleClose = () => {
        this.setState({open: false});
      };

      cbOnClick() {
          this.props.cbClick(this.state.name);
      }

    render() {
        const actions = [
          <FlatButton
            label="Close"
            primary={true}
            onClick={this.handleClose}
          />
        ];
        return (
          <div>
          <Card>
              <CardMedia
                overlay={<CardTitle title={this.state.title} subtitle={this.state.subtitle} />}>
                <div style={style.spacer}></div>
              </CardMedia>
              <CardText>
                  <FlatButton
                    label="More Info"
                    primary={true}
                    onClick={this.handleOpen}
                  />
              </CardText>
              <CardActions>
                <Checkbox
                    name={this.state.name}
                    label="Select"
                    labelPosition="left"
                    style={style.checkbox}
                    onClick={this.cbOnClick}
                  />
              </CardActions>
            </Card>
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                  {this.state.text}
              </Dialog>
          </div>
        );
      }
}

export default CardChoice;

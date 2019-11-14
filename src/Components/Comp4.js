import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { List } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Button from "@material-ui/core/Button";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DeleteIcon from "@material-ui/icons/Delete";

// import "./App.css";
export default class Comp4 extends React.Component {
  state = {};
  //SPAM PAGE
  render() {
    return (
      <List>
          {this.props.data.map((item, index) => 
            item.status === "Inbox" ? (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Avatar alt="Remy Sharp" src={`./images/${item.Image}`} />
                    <Typography> {item.SenderName} </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography
                      style={{ marginLeft: 80 }}
                      component="span"
                      variant="body2"
                      color="textPrimary">
                      {item.Mesg}
                    </Typography>
                    <Button onClick={() => this.props.deleteEmail(index)}>
                      <DeleteIcon />
                    </Button>
                    <Button
                      style={{ marginRight: 990 }}
                      onClick={() => this.props.importants(index)}>
                      <FavoriteBorderIcon />
                    </Button>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ):(
                null))
            }
                  </List>
          )}}


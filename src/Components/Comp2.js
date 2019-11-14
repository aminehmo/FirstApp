import React from "react";
// import "./App.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import List from "@material-ui/core/List";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Button from "@material-ui/core/Button";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export default class Comp2 extends React.Component {
  state = {};
  // INBOX PAGE
  render() {
    return (
      <List>
        {this.props.data.map((item, index) =>
          item.status === "Inbox" ? (
            <ExpansionPanel expanded={item.expand}>
              <ExpansionPanelSummary
                expandIcon={
                  <ExpandMoreIcon onClick={() => this.props.expand(index)} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Avatar alt="Remy Sharp" src={`./images/${item.Image}`} />
                <Typography> {item.SenderName} </Typography>
                <Button onClick={() => this.props.deleteEmail(index)}>
                  <DeleteIcon />
                </Button>
                <div>
                  <Button
                    style={{ marginRight: 990 }}
                    onClick={() => this.props.importants(index)}
                  >
                    {" "}
                    <FavoriteBorderIcon />
                  </Button>
                </div>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <Typography
                  style={{ marginLeft: 80 }}
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {item.Mesg}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ) : null
        )}
      </List>
    );
  }
}
{
  /* <List>
              {this.props.data.map((item, index) => {
                if (item.status === "Inbox") {
                  return (
                    <div style={{ background: "lightgray" }}>
                      <ListItem alignItems="flex-start" key={index}>
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src={`./images/${item.Image}`}
                          />
                        </ListItemAvatar>
                        
                        <ListItemText
                          primary={`${item.SenderName} `}
                          secondary={
                            <Typography
                              style={{ marginLeft: 80 }}
                              component="span"
                              // variant="body2"
                              color="textPrimary"
                            >
                              {`${item.Mesg}`}
                            </Typography>
                          }
                        />
                        <hr />

                        <Button onClick={() => this.props.deleteEmail(index)}>
                          <DeleteIcon />
                        </Button>
                        <Button
                          style={{ marginRight: 990 }}
                          onClick={() => this.props.importants(index)}
                        >
                          <FavoriteBorderIcon />
                        </Button>
                      </ListItem>
                      <hr />
                    </div>
                  );
                }
              })}
            </List> */
}

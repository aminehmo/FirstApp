import React from "react";
// import "./App.css";
import List from "@material-ui/core/List";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import DeleteIcon from "@material-ui/icons/Delete";

import Button from '@material-ui/core/Button';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import RestoreIcon from "@material-ui/icons/Restore";

export default class Comp1 extends React.Component {
  state = {

  };
  //important PAGE
  render() {
    return (
      <div>
        <List>
          {this.props.data.map((item, index) => {
            if (item.status === "Important") {
              return (
                <div style={{ textAlign: "center",background: "lightgray"  }}>
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar  alt="Remy Sharp" src={`./images/${item.Image}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${item.SenderName} `}
                      secondary={   
                          <Typography style={{ marginLeft: 80 }}
                            component="span"
                            // variant="body2"
                            color="textPrimary"
                          >
                            {`${item.Mesg}`}
                          </Typography>}
                    /> <hr />
                    <Button style={{ marginRight: 990 }} onClick={() => this.props.deleteEmail(index)}>
                      <DeleteIcon />
                    </Button>
                  </ListItem>
                  <hr />
                </div>
              );
            }
          })}
        </List>
      </div>
    );
  }
}

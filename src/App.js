import React from "react";
import StarIcon from "@material-ui/icons/Star";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Comp2 from "./Components/Comp2";
import Comp1 from "./Components/Comp1";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./App.css";

export default class App extends React.Component {
  state = {
    selectedPage: "Inbox",
    status: true,
    styleA: { height: 60, marginLeft: 100, display: "flex" },
    emailData: [
      {
        SenderName: "John",
        Mesg: "This is an important msg",
        Image: "ahmed.png",
        status: "Inbox",
        expand: false
      },
      {
        SenderName: "Mohammad",
        Mesg: "meet me at landmark at 8pm tonight ",
        Image: "george.png",
        status: "Inbox",
        expand: false
      },
      {
        SenderName: "Gillian",
        Mesg: "i will not attend today ",
        Image: "gillian.png",
        status: "Inbox",
        expand: false
      },
      {
        SenderName: "Hania",
        Mesg: "hello how are you today?",
        Image: "hania.png",
        status: "Inbox",
        expand: false
      },
      {
        SenderName: "Mariam",
        Mesg: "can you send me my files",
        Image: "mariam.png",
        status: "Inbox",
        expand: false
      },
      {
        SenderName: "Robert",
        Mesg: "how is everything ?",
        Image: "robert.png",
        status: "Inbox",
        expand: false
      }
    ],
    open: false
  };
  handleDelete = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Trash";
    this.setState({ emailData: temp });
  };
  handleImportant = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Important";
  };
  handleExpand = Index => {
    let temp = this.state.emailData;
    temp[Index].expand = !temp[Index].expand;
    this.setState({ emailData: temp });
  };

  handleRestore = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Inbox";
    this.setState({ emailData: temp });
  };

  handleChanges = text => {
    this.setState({ selectedPage: text });
  };

  // handleDrawer = () => {
  //   this.setState({ status: !this.state.status });
  // };

  // handleOpen = () => {
  //   this.setState({ open: !this.state.open });
  // };

  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <CssBaseline />
        <AppBar>
          <div style={this.state.styleA}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
        <nav style={{ marginLeft: 300 }} aria-label="mailbox folders">
          <div>
            <Drawer variant="persistent" anchor="left" open={this.state.status}>
              <div />
              <div style={{ textAlign: "center", color: "black" }}>
                <IconButton>
                  <Typography style={{ textAlign: "center", color: "black" }}>
                    <strong>CP3170</strong>
                  </Typography>
                </IconButton>
              </div>
              <Divider />
              <List style={{ height: 150, background: "gray" }}>
                {["Inbox", "Trash", "Important", "Spam"].map(text => (
                  <ListItem
                    style={{ background: "gray" }}
                    button
                    key={text}
                    onClick={() => this.handleChanges(text)}
                  >
                    <ListItemIcon>
                      {text === "Inbox" ? (
                        <InboxIcon />
                      ) : text === "Trash" ? (
                        <DeleteSweepIcon />
                      ) : text === "Important" ? (
                        <StarIcon />
                      ) : text === "Spam" ? (
                        <MailOutlineIcon />
                      ) : (
                        <MailOutlineIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
          <Divider />
        </nav>
        <main style={{ marginLeft: 160 }}>
          <div style={{ marginTop: 80 }} />
          {this.state.selectedPage === "Inbox" ? (
            <Comp2
              data={this.state.emailData}
              deleteEmail={this.handleDelete}
              importants={this.handleImportant}
              expand={this.handleExpand}
            />
          ) : this.state.selectedPage === "Trash" ? (
            <Comp3
              data={this.state.emailData}
              restoreEmail={this.handleRestore}
            />
          ) : this.state.selectedPage === "Important" ? (
            <Comp1
              data={this.state.emailData}
              deleteEmail={this.handleDelete}
            />
          ) : this.state.selectedPage === "Spam" ? (
            <Comp4 data={this.state.emailData} />
          ) : null}
        </main>
      </div>
    );
  }
}

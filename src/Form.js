import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormHelperText,
  Icon,
  withStyles,
  AppBar,
  Typography
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import axios from "axios";

const styles = theme => ({
  root: {
    textAlign: "center"
  },
  input: {
    display: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      project: "",
      deliverable: "",
      timeline: "",
      date: "",
      notes: "",
      selectedFile: null
    };
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleProject = event => {
    this.setState({ project: event.target.value });
  };
  handleDeliverable = event => {
    this.setState({ deliverable: event.target.value });
  };
  handleTimeline = event => {
    this.setState({ timeline: event.target.value });
  };
  handleDate = event => {
    this.setState({ date: event.target.value });
  };
  handleNotes = event => {
    this.setState({ notes: event.target.value });
  };
  handleFile = event => {
    console.log(event.target.files[0]);
    console.log(this.state);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };
  handleSubmit = event => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post("198.54.116.142:3306", data, {}).then(res => {
      console.log(res.statusText);
    });
  };

  render() {
    const {
      classes,
      name,
      email,
      title,
      project,
      deliverable,
      timeline,
      date
    } = this.props;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Research & Analysis Submission Page
            </Typography>
          </Toolbar>
        </AppBar>

        <form noValidate autoComplete="off">
          <FormControl className="FormItem">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              type="text"
              id="name"
              required
              value={name}
              onChange={this.handleName}
            />
          </FormControl>
          <FormControl className="FormItem">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              variant="outlined"
              required
              value={email}
              onChange={this.handleEmail}
            />
          </FormControl>
          <FormControl className="FormItem">
            <InputLabel htmlFor="name">Project Title</InputLabel>
            <Input
              type="text"
              id="name"
              required
              value={title}
              onChange={this.handleTitle}
            />
          </FormControl>
          <FormControl className="FormItem">
            <InputLabel htmlFor="project">Project Description</InputLabel>
            <Input
              id="project"
              variant="outlined"
              required
              fullWidth
              multiline
              value={project}
              onChange={this.handleProject}
            />
            <FormHelperText>
              What information are you looking for and why?
            </FormHelperText>
          </FormControl>
          <FormControl className="FormItem">
            <InputLabel htmlFor="deliverable">Project Deliverable</InputLabel>
            <Input
              id="deliverable"
              variant="outlined"
              required
              fullWidth
              multiline
              value={deliverable}
              onChange={this.handleDeliverable}
            />
            <FormHelperText>Details on the final product.</FormHelperText>
          </FormControl>
          <FormControl className="FormItem">
            <InputLabel htmlFor="timeline">Timeline</InputLabel>
            <Input
              id="timeline"
              variant="outlined"
              value={timeline}
              onChange={this.handleTimeline}
            />
            <FormHelperText>How urgent is this?</FormHelperText>
          </FormControl>
          <FormControl className="FormItem Date">
            <Input
              id="date"
              label="date"
              type="date"
              required
              value={date}
              onChange={this.handleDate}
            />
            <FormHelperText>
              When does the project need to be completed?
            </FormHelperText>
          </FormControl>
          <FormControl className="FormItem">
            <Input
              variant="outlined"
              type="file"
              onChange={this.handleFile}
              fullWidth
              component="span"
            />
            <FormHelperText>
              Upload supplemental files for the project. e.g. Rent Roll, P&L
              statements, photos, etc.
            </FormHelperText>
          </FormControl>
          <FormControl className="FormItem">
            <InputLabel htmlFor="notes">Additional Notes</InputLabel>
            <Input
              id="notes"
              required
              variant="outlined"
              multiline
              value={this.notes}
              onChange={this.handleNotes}
            />
            <FormHelperText>
              Any other information relevant to the project.
            </FormHelperText>
          </FormControl>

          <Button
            variant="outlined"
            className="submit FormItem"
            onClick={this.handleSubmit}
            type="submit"
            startIcon={<Icon>send</Icon>}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

MyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyForm);

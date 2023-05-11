import { makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import React, {useState} from "react";
import cblogo from "./cblogo.png";
import Find from './find';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    background: '#be6a77',
    boxShadow: 'none',
    color: 'white'
  },
  button_potato:{
    margin: '12px',
    color: 'brown',
  },
  button_tomato:{
    margin: '12px',
    color: 'red',
  }
}));


export const ImageUpload = () => {
  const classes = useStyles();
  const [finder,setFinder] = useState("");
  

  const buttonEventHandler = (e) =>{
    if(e.currentTarget.value === "tomato"){
      setFinder("tomato");
    }
    else
      setFinder("potato");
  }

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography  variant="h6" noWrap>
            Leaf Disease Classification
          </Typography>
          <div className={classes.grow} />
          <Avatar src={cblogo}></Avatar>
        </Toolbar>
      </AppBar>
      {
          finder === "potato" ? <Find plant="potato"/> : <Button variant="outlined" className={classes.button_potato} onClick={buttonEventHandler} value="potato">Click for Potato Leaf Disease Detection</Button>
      }
      {
          finder === "tomato" ? <Find plant="tomato"/> : <Button variant="outlined" className={classes.button_tomato} onClick={buttonEventHandler} value="tomato">Click for Tomato Leaf Disease Detection</Button>
      }

    </React.Fragment >
  );
};

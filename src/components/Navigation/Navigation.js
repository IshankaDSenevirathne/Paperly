import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';


  
const useStyles = makeStyles((theme) => ({
    navBar:{
        backgroundColor:"#363f44",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button:{
        color:"whitesmoke",
        transition:"0.2s ease-out",
        border:"1px solid transparent",
        borderRadius:"0px",
        "&:hover":{
            color:"white",
            borderBottom:"1px solid #1fa2ff"
        }
    },
    list: {
        width: "100%",
    },
    listItemText:{
        color:"#fff"
    },
    drawer:{
        background:"#363f44"
    },
    button2: {
        color: "white",
        transition:"0.4s ease-out",
        border:"1px solid white",
        "&:hover": {
          color: "#1fa2ff",
          border: "1px solid #1fa2ff",
        },
      },
}));
export default function Navigation() {
  const classes = useStyles();
  const [drawerState,setDrawerState]=useState(false);
  const toggleDrawer=(option)=>(event)=>{
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(option);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar>
            <Hidden mdDown>
                <Grid container justify="space-between"  direction="row" alignItems="center" style={{paddingLeft:"10%",paddingRight:"10%"}}>
                    <Grid item  justify="flex-start" alignItems="center">
                        <div style={{display:"flex",alignItems:"center"}}>
                            <Link href="/" color="inherit">
                                <div style={{paddingTop:"5px",paddingBottom:"5px"}}>
                                    <svg  width="70px" height="70px" viewBox="0 0 500 501.52"><title>Paperly (11)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><text/><g id="PaperlyLogo"><g id="Paperly_logo"><g id="part3"><path d="M376.83,150a10,10,0,0,0-5.09-8.3l-5.3-2.52-.21-.11s-2.39-1.15-5.31-2.54L187.42,54.05c-2.93-1.39-3.59-.52-1.47,1.92l79.45,91.94a33.7,33.7,0,0,0,9.16,7l53.88,25.6c2.92,1.39,5.31,2.54,5.3,2.56s2.37,1.16,5.29,2.55l22.77,10.84L372,201.27c2.67,1.27,4.86-.34,4.86-3.57Z" style={{fill:"#fff"}}/></g><g id="part2"><path d="M189.08,63.19c-2.42-2.79-4.4-2-4.4,1.64v380c0,3.7,1.95,4.41,4.33,1.59l48.21-57.1a21.39,21.39,0,0,0,4.33-11.85V130.35a20.93,20.93,0,0,0-4.4-11.79Z" style={{fill:"#fff"}}/></g><g id="part1"><path d="M380.85,141.22c0-3.7-2.68-5.32-6-3.61L125.08,267.92c-3.27,1.71-3.4,4.73-.29,6.72l44.7,28.52a12.87,12.87,0,0,0,11.62.51L374.92,202.41a12.23,12.23,0,0,0,5.95-9.83Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>   
                                </div>
                            </Link>
                            <Link href="/subjectmenu" style={{textDecoration:"none"}}>
                                <Button className={classes.button}>
                                <Typography variant="subtitle1" align="center">
                                        CATEGORIES
                                </Typography>
                                </Button>
                            </Link>
                            <Link href="/" style={{textDecoration:"none"}}>
                                <Button className={classes.button}>
                                <Typography variant="subtitle1" align="center">
                                        FEATURES
                                </Typography>
                                </Button>
                            </Link>
                            <Link href="/" style={{textDecoration:"none"}}>
                                <Button className={classes.button}>
                                <Typography variant="subtitle1" align="center">
                                        STATISTICS
                                </Typography>
                                </Button>
                            </Link>
                            <Link href="/" style={{textDecoration:"none"}}>
                                <Button className={classes.button}>
                                <Typography variant="subtitle1" align="center">
                                        ABOUT US
                                </Typography>
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item  justify="flex-end">
                        <div>
                            <Typography gutterBottom variant="subtitle1" align="center">
                                <Link
                                    to="/subjectmenu"
                                    style={{
                                    textDecoration: "none",
                                    }}
                                >
                                    <Button
                                    variant="outlined"
                                    className={classes.button2}
                                    size="large"
                                    >
                                    GET STARTED
                                    </Button>
                                </Link>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden lgUp>
                <Grid container justify="space-between"  direction="row" alignItems="center">
                    <Grid item  justify="flex-start">
                        <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                    <Grid item  justify="flex-end">
                        <Link href="/" color="inherit">
                            <div>
                                <svg  width="40px" height="40px" viewBox="0 0 500 501.52"><title>Paperly (11)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><text/><g id="PaperlyLogo"><g id="Paperly_logo"><g id="part3"><path d="M376.83,150a10,10,0,0,0-5.09-8.3l-5.3-2.52-.21-.11s-2.39-1.15-5.31-2.54L187.42,54.05c-2.93-1.39-3.59-.52-1.47,1.92l79.45,91.94a33.7,33.7,0,0,0,9.16,7l53.88,25.6c2.92,1.39,5.31,2.54,5.3,2.56s2.37,1.16,5.29,2.55l22.77,10.84L372,201.27c2.67,1.27,4.86-.34,4.86-3.57Z" style={{fill:"#fff"}}/></g><g id="part2"><path d="M189.08,63.19c-2.42-2.79-4.4-2-4.4,1.64v380c0,3.7,1.95,4.41,4.33,1.59l48.21-57.1a21.39,21.39,0,0,0,4.33-11.85V130.35a20.93,20.93,0,0,0-4.4-11.79Z" style={{fill:"#fff"}}/></g><g id="part1"><path d="M380.85,141.22c0-3.7-2.68-5.32-6-3.61L125.08,267.92c-3.27,1.71-3.4,4.73-.29,6.72l44.7,28.52a12.87,12.87,0,0,0,11.62.51L374.92,202.41a12.23,12.23,0,0,0,5.95-9.83Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>   
                            </div>
                        </Link>
                    </Grid>
                </Grid>
                <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer(false)} PaperProps={{className:classes.drawer}}>
                    <div className={classes.list}>
                        <List>
                            {['Categories', 'Features', 'Statistics',"Feedback","Announcements"].map((text, index) => (
                            <ListItem button key={text}>
                                <Link href="/subjectmenu" style={{textDecoration:"none"}}>
                                    <div style={{display:"flex",alignItems:"center"}}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                        <ListItemText primary={text} className={classes.listItemText}/>
                                    </div>
                                </Link>
                            </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['About Us','Terms of Service'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

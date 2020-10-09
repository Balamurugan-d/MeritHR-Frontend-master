import React from "react";
import { Divider, Drawer, List, withStyles } from "@material-ui/core";
import clsx from 'clsx';
import { mainListItems, secondaryListItems } from './listItems';
import './sidebar.component.scss';

const drawerWidth = 100;

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    // drawerPaper: {
    //     position: 'relative',
    //     whiteSpace: 'nowrap',
    //     width: drawerWidth,
    //     overflowX: 'hidden',
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // drawerPaperClose: {
    //     overflowX: 'hidden',
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    //     width: theme.spacing(7),
    //     [theme.breakpoints.up('sm')]: {
    //         width: theme.spacing(9),
    //     },
    // },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: 'white'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     display: 'flex',
    //     overflow: 'auto',
    //     flexDirection: 'column',
    // },
    fixedHeight: {
        height: 240,
    },
});

class SidebarComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        let open = true;
        return <Drawer variant="permanent" classes={{ paper: clsx(this.props.classes.drawerPaper, !open && this.props.classes.drawerPaperClose), }} open={open}        >
            <div className={this.props.classes.toolbarIcon}>
                {/* collapse icon */}
                {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
          <img src="https://www.texanfit.com/wp-content/uploads/2017/11/logo-Placeholder.png" alt="..." className="sidebar-logo" />
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
    }
}

export default withStyles(styles)(SidebarComponent);
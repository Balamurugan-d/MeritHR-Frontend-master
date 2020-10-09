import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography, withStyles, TextField, InputAdornment } from "@material-ui/core";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./header.component.scss"
import SearchIcon from "@material-ui/icons/Search";
// import './header.component.scss';
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

class HeaderComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        return <AppBar position="absolute" className={clsx(this.props.classes.appBar, open && this.props.classes.appBarShift)}>
            <Toolbar className={this.props.classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={clsx(this.props.classes.menuButton, open && this.props.classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={this.props.classes.title}>
                    {/* <span className="navbar-font-color">Merit</span> */}
                    <TextField className="search-input"
                        id="input-with-icon-textfield"
                        // label="vign"
                        defaultValue="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Typography>
                <IconButton className="navbar-font-color">
                    <Badge badgeContent={4} color="primary" className="border-nav">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    }
}

export default withStyles(styles)(HeaderComponent); 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderComponent from '../header/header.component';
import BreadcrumbComponent from '../breadcrumb/breadcrumb.component';
import AddIcon from '@material-ui/icons/Add';

import SidebarComponent from '../sidebar/sidebar.component';
import TableComponent from '../common/table/table.component';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import './dashboard.component.scss';
import EmployeeFormComponent from './employee-form.component';
import { Typography, Button, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Actions } from '../../actions/actions';
import ProgressStepper from '../common/progress/progress.component';
import OnboardingComponent from '../onboarding/onboarding.component';

const drawerWidth = 300;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
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
  //   position: 'relative',
  //   whiteSpace: 'nowrap',
  //   width: drawerWidth,
  //   overflowX: 'hidden',
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: 'hidden',
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(7),
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing(9),
  //   },
  // },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // height: '100vh',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: '120px',
    paddingRight: '20px'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   display: 'flex',
  //   overflow: 'auto',
  //   flexDirection: 'column',
  // },
  fixedHeight: {
    height: 240,
  },
});


// start scrolltotop
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  classes: any;
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       position: 'fixed',
//       bottom: theme.spacing(2),
//       right: theme.spacing(2),
//     },
//   }),
// );

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={props.classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
// End- scroll to top

const columns: { id: string, label: string, minWidth: number, align?: 'inherit' | 'left' | 'center' | 'right' | 'justify', format?: any }[] = [
  // { id: 'checkbox', label: '', minWidth: 20 },
  { id: 'EmployeeID', label: 'Employee ID', minWidth: 100 },
  { id: 'Name', label: 'Name', minWidth: 250, format: (value) => value.Name.FirstName + ' ' + value.Name.LastName },
  {
    id: 'Mobile',
    label: 'Mobile',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'Designation',
    label: 'Designation',
    minWidth: 200,
    align: 'left',
  },

  {
    id: 'JoiningDate',
    label: 'Date of Joining',
    minWidth: 90,
    align: 'left',
  },
  {
    id: 'Department',
    label: 'Project Department',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'Action',
    label: 'Action',
    minWidth: 40,
    align: 'right',
  },

];

export class DashboardComponent extends React.Component<any, any> {
  /**
   *
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return (
      <div className={this.props.classes.root} >
        <CssBaseline />
        <HeaderComponent />
        <SidebarComponent />
        {/* start- Main content area */}
        <main className={this.props.classes.content} >
          <div className={this.props.classes.appBarSpacer} />
          <div id="back-to-top-anchor"></div>
          <Container maxWidth="lg" className={this.props.classes.container}>
            <div className="content-head-block">
              <div className="content-head-left">
                <Typography variant="h6" component="h6">
                  Employees
              </Typography>
                <BreadcrumbComponent />
              </div>
              <div className="content-head-right">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={this.props.classes.button}
                  startIcon={<AddIcon />}
                >
                  New
              </Button>
              </div>
            </div>

            <TableComponent inputData={this.props.data?.employees} columns={columns} />
            <div className="text-font-secondary"><span className="text-font-primary text-semibold">0/6</span> completed</div>
            <ProgressStepper /> 
            <EmployeeFormComponent />
            <OnboardingComponent />
          </Container>
          <div className="scroll-back-bottom">
            <ScrollTop {...this.props}>
              <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </div>
        </main>
        {/* end- Main content area */}

      </div >
    );
  }
}
const mapStateToProps = state => ({
  data: state.employeeReducer
});

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(Actions.getEmployees())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DashboardComponent));
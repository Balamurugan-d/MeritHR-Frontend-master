import React from "react";
import { Typography, withStyles, Grid, Card, CardContent, Tabs, Tab, Box } from "@material-ui/core";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './employee-form.component.scss';
import TabComponent from "../common/tabs/tab.component";


const styles = (theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

});

class EmployeeFormComponent extends React.Component<any, any>{
    /**
     *
     */

    constructor(props) {
        super(props);
    }

    render() {
        return <Grid container spacing={3} justify="center">

            <Grid item xs={12}>
                <Card className="theme-card">
                    <div className="card-icon-left">
                        <PersonOutlineIcon />
                    </div>
                    <CardContent>
                        <div>
                            <Typography variant="h5" component="h2">
                                Employee Form
                        </Typography>
                            <Typography color="textSecondary">
                                Vignesh Shivan -<small>Software Analyst</small>
                            </Typography>
                        </div>
                        <TabComponent />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    }
}

export default withStyles(styles)(EmployeeFormComponent); 
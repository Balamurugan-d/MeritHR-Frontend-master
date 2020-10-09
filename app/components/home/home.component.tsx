import React from 'react';
import { AccessAlarm } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Route, Switch } from 'react-router-dom';
import DashboardComponent from '../dashboard/dashboard.component';
import './home.component.scss';

export class HomeComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="heading1">Home component-<span className="font-color"> inside home</span><AccessAlarm /><DeleteIcon /><DeleteOutlinedIcon />
            <Switch>
                <Route path='' exact component={DashboardComponent} />
            </Switch>
        </div>
    }
}
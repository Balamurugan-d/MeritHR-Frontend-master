import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

// import "./breadcrumb.scss";

export default function BreadcrumbComponent() {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" >
          Home
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          Main Menu
        </Link>
        <Typography color="textPrimary">Employees</Typography>
      </Breadcrumbs>
    );
  }
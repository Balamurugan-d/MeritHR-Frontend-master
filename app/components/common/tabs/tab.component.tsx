import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import { Grid, Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, InputLabel, Select, MenuItem } from '@material-ui/core';

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import './tab.component.scss';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box py={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
}));

export default function TabComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className="mt-4">
                <Tabs
                    //   variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <LinkTab label="Basic" href="/basic" {...a11yProps(0)} />
                    <LinkTab label="Personal" href="/personal" {...a11yProps(1)} />
                    <LinkTab label="WorkForce Details" href="/workForce-details" {...a11yProps(2)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Grid item sm={12} md={4} className="text-align-center">
                        <div className="fileinput text-center">
                            <input type="file" />
                            <div className="thumbnail img-circle">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhIIBwgWExUXGR8TEBIVFRsgIBMWIB0iICAdGBkgKC4sICAxICsoKEknKCk3Nzg4Iys/P0I/PzRBQSsBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgQFAQYDB//EADAQAQABAwIDBwIFBQAAAAAAAAABAgMEBRESIVETFDFBYXHRMoEiQlJyoVOCkbHB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP1EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmZmpdhlxbo5xH1rGoZUYtjePGeVLIsYNzIxqsjfn+WP1dQehiYqjeJdZWi5fFT3euecfT7dGqAAAAAAAy8jVYtZcW6Y3pjlVPwnq2b2Fvsrc/in+IU7Ol1XMObk8qp50x6A3KZiqnemfZ1jaRmTRV3a7P7d/KejZAAAAAAAAAAARrqpopmqqdojnMpK+djzk2Ozpr2/wC+4MeePU87pH+qflvUUU0UxTTG0RyhW0/EjEs7T4z9UrYMLU7FWJlRkWeUTO8ektfFv05NiLlP3jpLuTZpyLE2q/P+JUtKxcjGqq7SYiJ8vXqDSAAAAV8zJpxbHHV9o6ysK+XiWsqna5Hh4THkDK0/Gqzcici/zjfn6z0br52bVFm3FuiOUPoDH1jD2nvNqP3fK1peZ3m1w1z+KPH1jquzETG0wp42nWce92tMzv5egLoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFddNH11beSbA1enIpv73at4/LIN8Y+BqkREW8n7VfLWpqprjemd/YEgcqqimN6p2B18Kcm1VfmxFXOFHP1SmmJt407z+rp7Kem4lzJvdpM7RHOZ6g9CAAAAAAAAAAAAAAAAAAhdt0XqOC5TvCYDDytIrpnix53jp5qUd4xquXFTL1Lk0xMbVQDzff8AL227WUNsnKq58VT0nY2v6Uf4hOIiOUQDHxNIqmeLJn+2Gvbopop4aI2hIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" alt="..." />
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                >
                                    Add Photo
                                </Button>
                            </div>
                        </div>

                    </Grid>

                    <Grid item sm={12} md={8}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" label="Name" size="small" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="date"
                                    required
                                    label="DOB"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    size="small"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className="mt-4">
                                    <FormLabel component="legend" className="label-shrink">Gender *</FormLabel>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                        <FormControlLabel value="Male" control={<Radio color="secondary" />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio color="secondary" />} label="Female" />
                                        <FormControlLabel value="Other" control={<Radio color="secondary" />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Typography variant="h6" className="mt-4">
                    Contact Info
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="standard-required" label="Primary Mobile" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="standard-required" label="Secondary Mobile" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="standard-required" label="Personal Email" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="standard-required" label="Workforce Email" size="small" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField required id="standard-required" label="Permanant Address" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="City" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="State" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="Pincode" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="Country" size="small" fullWidth />
                    </Grid>
                </Grid>
                {/* <Box display="flex" alignItems="center">
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox name="Secondary" />}
                            label="Present Address is same as above"
                        />
                    </FormGroup>
                </Box> */}

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox name="Secondary" />}
                                label="Present Address is same as above"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="standard-required" label="Address" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="City" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="State" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="Pincode" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField required id="standard-required" label="Country" size="small" fullWidth />
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                    >
                        Next
                        </Button>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h6" className="mt-4">
                    Qualification
                </Typography>
                <Grid container spacing={1} alignItems="center" >
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <TextField required id="standard-required" label="Qualification" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <TextField required id="standard-required" label="Institution Name" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2}>
                        <TextField required id="standard-required" label="Percentage" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={5} md={5} lg={3}>
                        <TextField required id="standard-required" label="Year of Qualification" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} lg={1}>
                        <ControlPointIcon className="link-item" />
                    </Grid>
                </Grid>
                <Typography variant="h6" className="mt-4">
                    Employment History
                </Typography>
                <Grid container spacing={1} alignItems="center" >
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <TextField required id="standard-required" label="Employer Name" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <TextField required id="standard-required" label="Designation" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2}>
                        <TextField
                            id="date"
                            required
                            label="Joining Date"
                            type="date"
                            defaultValue="2017-05-24"
                            size="small"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} md={5} lg={3}>
                        <TextField
                            id="date"
                            required
                            label="Relieving Date"
                            type="date"
                            defaultValue="2017-05-24"
                            size="small"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} lg={1}>
                        <ControlPointIcon className="link-item" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <TextField required id="standard-required" label="Address" size="small" fullWidth />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container spacing={1} alignItems="center" >
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField required id="standard-required" label="Designation" size="small" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={5}>
                        <FormControl className="w-100">
                            <InputLabel id="demo-simple-select-label">Job Level</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                required
                                id="demo-simple-select"
                                // fullWidth={true}
                                autoWidth={true}
                            // value={age}
                            // onChange={this.handleCha ngeSelect}
                            >
                                <MenuItem value={10}>L1</MenuItem>
                                <MenuItem value={20}>L2</MenuItem>
                                <MenuItem value={30}>L3</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <TextField required id="standard-required" label="Job Level" size="small" fullWidth /> */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <TextField
                            id="date"
                            required
                            label="Date of Joining"
                            type="date"
                            defaultValue="2017-05-24"
                            size="small"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <FormControl className="w-100">
                            <InputLabel id="demo-simple-select-label">Team</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                required
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Minsky IT</MenuItem>
                                <MenuItem value={20}>LLI</MenuItem>
                                <MenuItem value={30}>Merit IT</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={5}>
                        <FormControl className="w-100">
                            <InputLabel id="demo-simple-select-label">Reporting Manager</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                required
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Smith</MenuItem>
                                <MenuItem value={20}>Bala</MenuItem>
                                <MenuItem value={30}>vivekanandan</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="standard-required" label="Extra Info" size="small" fullWidth />
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                    >
                        Save
              </Button>
                </Box>
            </TabPanel>

        </div>
    );
}

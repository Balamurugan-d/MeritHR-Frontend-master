import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, withStyles, TableSortLabel } from "@material-ui/core";
import './table.component.scss';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const styles = {
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 650,
    },
};

// const rows = [
//     createData('', '347856', 'Gopalakrishnan', '9892203456', 'Tech Lead', '27 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Raja Narayanan', '9892563456', 'Software Analyst', '21 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Bala Murugan', '989226756', 'Senior Software Engineer', '20 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Roopika', '9892245556', 'Senior Software Engineer', '12 Nov, 2019', 'IT Software', ''),
//     createData('', '347856', 'Sharanya Vasudev', '9892203456', 'Tech Lead', '27 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Gopalakrishnan', '9892203456', 'Tech Lead', '27 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Raja Narayanan', '9892563456', 'Software Analyst', '21 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Bala Murugan', '989226756', 'Senior Software Engineer', '20 Dec, 2019', 'IT Software', ''),
//     createData('', '347856', 'Roopika', '9892245556', 'Senior Software Engineer', '12 Nov, 2019', 'IT Software', ''),
//     createData('', '347856', 'Sharanya Vasudev', '9892203456', 'Tech Lead', '27 Dec, 2019', 'IT Software', ''),
// ];


class TableComponent extends React.Component<any, any> {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 25
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({ newPage });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: + event.target.value });
        this.setState({ page: 0 });
    };

    render() {
        return (
            <>
                <TableContainer className={this.props?.classes?.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <div className="custom-control custom-checkbox" title="select all">
                                        <input type="checkbox" className="custom-control-input" id="checkall" name="example1" />
                                        <label className="custom-control-label" htmlFor="checkall"></label>
                                    </div>
                                </TableCell>
                                {this.props.columns?.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align || 'inherit'}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.inputData?.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, rIndex) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.empid}>
                                        <TableCell padding="checkbox">
                                            <div className="custom-control custom-checkbox" title="select all">
                                                <input type="checkbox" className="custom-control-input" id="checkall" name="example1" />
                                                <label className="custom-control-label" htmlFor="checkall"></label>
                                            </div>
                                        </TableCell>
                                        {this.props.columns?.map((column, cIndex) => <TableCell key={rIndex + '-' + cIndex} align={column.align} className="link-item">{column.format && column.format(row) || row[column.id]}</TableCell>)}
                                        <TableCell align="right">
                                            <span className="row-icons show-hover-block">
                                                <EditIcon className="row-icon show-hover-item" />
                                                <DeleteIcon className="row-icon show-hover-item" />
                                                <MoreIcon className="row-icon more-icon" />
                                                {/* <MoreIcon className="row-icon" /> */}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[25, 50, 100]}
                    component="div"
                    count={this.props.inputData?.length || 0}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </>
        )
    }


}
export default withStyles(styles)(TableComponent);
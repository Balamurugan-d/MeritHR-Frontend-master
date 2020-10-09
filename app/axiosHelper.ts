import axios from 'axios';

export namespace AxiosHelper {
    export const getEmployees = () => {
        return new Promise((resolve, reject) => resolve([{
            id: '12312',
            EmployeeID: '347856',
            Name: {
                FirstName: 'Gopala krishna kumar',
                LastName: 'T'
            },
            Mobile: '9892203456',
            Designation: 'Tech Lead',
            JoiningDate: new Date().toDateString(),
            Department: 'IT Software'
        }, {
            id: '12313',
            EmployeeID: '347857',
            Name: {
                FirstName: 'Raja Narayanan',
                LastName: 'R'
            },
            Mobile: '9892203457',
            Designation: 'Software Analyst',
            JoiningDate: new Date().toDateString(),
            Department: 'IT Software'
        }, {
            id: '12314',
            EmployeeID: '347858',
            Name: {
                FirstName: 'Bala Murugan',
                LastName: 'M'
            },
            Mobile: '989226756',
            Designation: 'Senior Software Engineer',
            JoiningDate: new Date().toDateString(),
            Department: 'IT Software'
        }]));
    }
}
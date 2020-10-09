import { AxiosHelper } from "../axiosHelper"

export namespace Actions {
    export const getEmployees = () => {
        return dispatch => AxiosHelper.getEmployees()
            .then(data => dispatch({ type: 'GETEMPLOYEES', data }))
            .catch(err => console.log('ERROR while fetching employees', err));
    }
}
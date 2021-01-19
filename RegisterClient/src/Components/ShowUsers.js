import { useEffect, useRef } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { GetUsers } from '../Controller/UserController';
import { setUserList } from '../Actions'

export default function ShowUsers(props) {
    const firstTime = useRef(true);

    useEffect(() => {
        if(firstTime.current) {
            GetUsers()
                .then((results) => {
                    props.dispatch(setUserList(results.data));
                })
            firstTime.current = false;
        }
    })

    return ( 
        <BootstrapTable data={props.userList} striped={true} hover={true}>
            <TableHeaderColumn dataField="username" isKey={true} dataSort={true}>Username</TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataSort={true}>E-mail</TableHeaderColumn>
            <TableHeaderColumn dataField="age" dataSort={true}>Age</TableHeaderColumn>
        </BootstrapTable>
    );
}
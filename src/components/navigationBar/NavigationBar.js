import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'

import { addEmployeeIcon } from './images';
import AddNewEmployee from './AddNewEmployee';
import './NavigationBar.scss';

const NavigationBar = props => {

    const [addNewEmployeeModalIsOpen, setAddNewEmployeeModalIsOpen] = useState(false);

    const history = useHistory();

    const openAddNewEmployeeModal = () => {
        setAddNewEmployeeModalIsOpen(true)
    }

    const onRequestModalClose = () => {
        setAddNewEmployeeModalIsOpen(false)
    }

    const logout = () => {
        history.push('/');
    }

    return (
        <header id="navigation-bar">
            <div id="logo-container">
                <div id="logo-section">
                    <h1 className="logo-text">Employees Record</h1>
                </div>
            </div>

            <div id="action-buttons">
                <img className='new-product-icon' src={addEmployeeIcon} onClick={openAddNewEmployeeModal} alt="Create New Product" />
                <Dropdown style={{ color: '#fff', fontSize: '20px', height: '20px' }} direction='left' >
                    <Dropdown.Menu style={{ marginTop: '10px', width: '130px' }}>
                        <Dropdown.Item text='Logout' onClick={logout} style={{ fontSize: "15px", textAlign: 'center', fontWeight: 'bold' }} />
                        <Dropdown.Divider />
                        <Dropdown.Item text='Tom Preston' style={{ fontSize: "15px", textAlign: 'center', fontWeight: 'bold' }} />
                        <Dropdown.Item text='Werner' style={{ fontSize: "15px", textAlign: 'center', fontWeight: 'bold' }} />
                        <div className="profile-image">
                            <Dropdown.Item>
                                <img src='https://avatars.githubusercontent.com/u/1?v=4' />
                            </Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {addNewEmployeeModalIsOpen ?
                <AddNewEmployee
                    headerTitle="Add New Employee"
                    isModalOpen={addNewEmployeeModalIsOpen}
                    addNewEmployee={props.addNewEmployee}
                    onRequestModalClose={onRequestModalClose}
                />
                : null}
        </header>
    );
}

export default withRouter(NavigationBar);
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Loader } from 'semantic-ui-react'


import NavigationBar from '../navigationBar/NavigationBar';
import ModifyEmployee from './ModifyEmployee';
import './Dashboard.scss';

const Dashboard = () => {
    const [employeeDetails, setEmployeeDetails] = useState([]);
    const [updateEmployeeModal, setUpdateEmployeeModal] = useState(false);
    const [employeeID, setEmployeeID] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://api.github.com/users')

            const employeeName = _.map(response.data, eachEmployee => {
                return eachEmployee.login
            })
            const userPersonalInfo = []
            for (const employee of employeeName) {
                const user = await axios.get(`https://api.github.com/users/${employee}`)
                userPersonalInfo.push(user.data)
            }
            setEmployeeDetails(userPersonalInfo);
        }
        fetchData();
    }, []);

    const openEmployeeDetailsModal = id => {
        setEmployeeID(id);
        setUpdateEmployeeModal(!updateEmployeeModal);
    }

    const renderUpdatedEmployees = employeeId => {
        const updateEmployee = employeeDetails.filter(data => data.id === employeeId);
        return (
            <ModifyEmployee
                headerTitle="Update Employee Details"
                isModalOpen={updateEmployeeModal}
                onRequestModalClose={onRequestModalClose}
                updateEmployee={updateEmployee}
                afterUpdateList={afterUpdateList}
            />);
    }

    const afterUpdateList = items => {
        const newEmployeeDetails = [items]
        const updateList = employeeDetails.filter(data => data.id !== items.id)
        _.map(employeeDetails, item => {
            if (item.id === items.id) {
                const finalList = [...newEmployeeDetails, ...updateList]
                setEmployeeDetails(finalList);
            }
        });
        setUpdateEmployeeModal(false)
    }

    const addNewEmployee = newEmployeeDetails => {
        console.log(newEmployeeDetails)
        const newList = [newEmployeeDetails]

        const combinedList = [...newList, ...employeeDetails]
        console.log(combinedList);
        setEmployeeDetails(combinedList);
    }

    const onRequestModalClose = () => {
        setUpdateEmployeeModal(!updateEmployeeModal);
    }

    const handleRemoveItem = (id) => {
        const newItems = employeeDetails.filter(data => data.id !== id);

        setEmployeeDetails(newItems);
    }

    const renderItems = () => {
        if (employeeDetails.length === 0) {
            return (
                <div className='loader'>
                    <Loader className="loader" active inline='centered' />
                    {/* <Segment style={{ minWidth: '100%', minHeight: '100%', marginTop: '200px', marginLeft: '100px' }}>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>

                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Segment> */}
                </div>
            )
        }
        const displayProducts = _.cloneDeep(employeeDetails);

        const listOfResults = [];

        if (displayProducts.length > 0) {
            _.map(displayProducts, item => {
                listOfResults.push(
                    <div className="products" key={item.id}>
                        <div className="image-container">
                            <img className="image" src={item.avatar_url} alt='Profile' />
                        </div>
                        <div className="details">
                            <h2 className="title">{item.name}</h2>
                        </div>
                        <p>{item.description}</p>
                        <div className="actions">
                            <button className="product-add-button" onClick={() => openEmployeeDetailsModal(item.id)}>Edit</button>
                            <button className="product-delete-button" onClick={() => handleRemoveItem(item.id)}>Delete</button>
                        </div>
                    </div>
                );
            });
            return listOfResults;
        }
        return null;
    }

    return (
        <div>
            <NavigationBar addNewEmployee={addNewEmployee} />
            <div className="main">
                {renderItems()}
                {updateEmployeeModal ? renderUpdatedEmployees(employeeID) : null}
            </div>
        </div>
    );
}

export default Dashboard;
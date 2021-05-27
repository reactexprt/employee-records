import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalHeader from '../common/ModalHeader';
import _, { uniqueId } from 'lodash';
import '../common/Modal.scss';

const AddNewEmployee = (props) => {
    const [employee, setEmployee] = useState({
        id: uniqueId("new"),
        login: "",
        name: "",
        avatar_url: "",
        location: "",
        email: "",
        company: "",
        blog: "",
        bio: "",
        twitter_username: "",
        public_repos: "",
        followers: "",
        following: ""
    });

    const handleChange = (e) => {
        const newEmployeeJSON = _.cloneDeep(employee);
        newEmployeeJSON[e.target.name] = e.target.value

        setEmployee(newEmployeeJSON);
    }

    const submitDetails = async () => {
        await props.addNewEmployee(employee);
        props.onRequestModalClose();
    }

    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={props.onRequestModalClose}
            className="modal-content-container"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <ModalHeader headerTitle={props.headerTitle} />
            <div id="editor-metadata-form">
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Employee Name" value={employee.name} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Login Name:
                    <input type="text" name="login" placeholder="login" value={employee.login} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Avatar URL:
                    <input type="text" name="avatar_url" placeholder="avatar_url" value={employee.avatar_url} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" placeholder="location" value={employee.location} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="email" value={employee.email} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Company:
                    <input type="text" name="company" placeholder="company" value={employee.company} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Blog:
                    <input type="text" name="blog" placeholder="blog" value={employee.blog} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Bio:
                    <input type="text" name="bio" placeholder="bio" value={employee.bio} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Twitter Username:
                    <input type="text" name="twitter_username" placeholder="twitter_username" value={employee.twitter_username} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Public_repos:
                    <input type="text" name="public_repos" placeholder="public_repos" value={employee.public_repos} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Followers:
                    <input type="text" name="followers" placeholder="followers" value={employee.followers} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Following:
                    <input type="text" name="following" placeholder="following" value={employee.following} onChange={(e) => handleChange(e)} />
                </label>
                <div className="submit-button" onClick={() => submitDetails()}>
                    <button>Add New Employee</button>
                </div>
            </div>
        </Modal>
    )
};

export default AddNewEmployee;
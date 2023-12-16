import React, { useState } from 'react'

const EditForm = ({ data, onUpdate, onCancel }) => {
    const [editedData, setEditedData] = useState({ ...data });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(editedData);
    };

   
    return (
        <div>
            <h3 className='form-title'>Edit Form</h3>
            <div className='form-container'>
                <div className='form-ele'>
            <label htmlFor="editedTestName">Test Name:</label>
            <input type="text" id="editedTestName" name="testName" value={editedData.testName} onChange={handleChange} />
            </div>
            <div className='form-ele'>
            <label htmlFor="editedTestType">Test Type:</label>
            <input type="text" id="editedTestType" name="testType" value={editedData.testType} onChange={handleChange} />
            </div>
            <div className='form-ele'>
            <label htmlFor='editedEmail'>Email: </label>
            <input id='editedEmail' type='email' name='testerEmail' value={editedData.testerEmail} onChange={handleChange}/>
            </div>
            <div className='form-ele'>
            <label htmlFor='editedNumber'>Mobile No.: </label>
            <input id='editedNumber' type='number' name='testerMobile' value={editedData.testerMobile} onChange={handleChange}/>
            </div>
            <div className='form-ele'>
            <label htmlFor='editedalternate'>Alternate No.: </label>
            <input id='editedalternate' type='alternateNo' name='alternativeNo' value={editedData.alternativeNo} onChange={handleChange}/>
            </div>
            <button className='btn' onClick={handleUpdate}>Update</button>
            <button className='btn' onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default EditForm

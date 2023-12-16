import React, { useState } from 'react'

const FormInput = ({ onSubmit, testTypes, onCreate }) => {
    const [newTestType, setNewTestType] = useState('');
    const [formData, setFormData] = useState({
        testName: '',
        testType: '',
        testerEmail: '',
        testerMobile: '',
        alternativeNo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmitTest = (e) => {
        e.preventDefault();
        onCreate(newTestType);
        setNewTestType('');
    };

    const handleNumber = () => {
        if(formData.testerMobile.length === 10){
            return true;
        }else{
            alert('Mobile Number must be equal to 10')
        }
    }
    const handleAlternateNumber = () => {
        if(formData.testerMobile !== formData.alternativeNo ){
           return true
        }else{
            alert('Mobile Number must not be equal')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(handleAlternateNumber() && handleNumber()){
            onSubmit(formData);
        setFormData({
            testName: '',
            testType: '',
            testerEmail: '',
            testerMobile: '',
            alternativeNo: '',
            updateDate: '',
        });
        }
    };


    return (
        <div>
            <h3 className='form-title'>Test Form</h3>
            <form onSubmit={handleSubmit} className='form-container'>

                <div className='form-ele'>
                    <label htmlFor='test-name'>Test Name: </label>
                    <input type='text' id='test-name' name='testName' value={formData.testName} onChange={handleChange} />
                </div>
                <div className='form-ele'>
                    <label htmlFor='testType'>Test Type: </label>
                    <select id='testType' name='testType' value={formData.testType} onChange={handleChange}>
                        {testTypes.map((item, i) => {
                            return <option key={i} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className='form-ele'>
                    <label htmlFor='inputTest'>Enter new Field: </label>
                    <input type='text' name='input' id='inputTest' value={newTestType} onChange={(e) => setNewTestType(e.target.value)} />
                </div>
                <button className='btn' onClick={handleSubmitTest}>Create New Test</button>

                <div className='form-ele'>
                    <label htmlFor='email'>Tester Email: </label>
                    <input type='email' name='testerEmail' id='email' value={formData.testerEmail} onChange={handleChange} required />
                </div>
                <div className='form-ele'>
                    <label htmlFor='mobile'>Tester Mobile No.: </label>
                    <input type='number' name='testerMobile' id='mobile' value={formData.testerMobile} onChange={handleChange} required />
                </div>
                <div className='form-ele'>
                    <label htmlFor='alt-mobile'>Alternate Mobile No.: </label>
                    <input type='number' name='alternativeNo' id='alt-mobile' value={formData.alternativeNo} onChange={handleChange} />
                </div>
                <button className='btn' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default FormInput

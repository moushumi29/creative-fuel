import React from 'react'

const TableData1 = ({ data, onEdit, onDelete }) => {

    const currentDate = new Date();
    const formateToString = currentDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
      });

    return (
        <div>
            <h3 className='form-title'>Test Table</h3>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Test Name</th>
                        <th>Test Type</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Alternate Number</th>
                        <th>Creation Date</th>
                        <th>Current Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr key={i} style={{backgroundColor: getRowColor(item.testType) }}>
                                <td>{i + 1}</td>
                                <td>{item.testName}</td>
                                <td>{item.testType}</td>
                                <td>{item.testerEmail}</td>
                                <td>{item.testerMobile}</td>
                                <td>{item.alternativeNo}</td>
                                <td>{formateToString}</td>
                                <td>{formateToString}</td>
                                <td>
                                    <button className='table-btn' onClick={() => onEdit(i)}>Edit</button>
                                    <button className='table-btn' onClick={() => onDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const getRowColor = (testType) => {
    switch (testType?.toLowerCase()) {
      case 'php':
        return 'green';
      case 'nodejs':
        return 'yellow';
      default:
        return 'orange';
    }
  };

export default TableData1

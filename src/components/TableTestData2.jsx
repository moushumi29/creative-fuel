import React from 'react'

const TableTestData2 = ({ data }) => {
    return (
        <div>
             <h3 className='form-title'>Test Type Table</h3>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Test Type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.testType}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableTestData2

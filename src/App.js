import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import TableData1 from './components/TableData1';
import TableTestData2 from './components/TableTestData2';
import EditForm from './components/EditForm';

function App() {
  const [testTypes, setTestTypes] = useState(['PHP', 'Reactjs', 'Nodejs']);
  const [formDataList, setFormDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
 
  const handleSubmit = (formData) => {
    setFormDataList([...formDataList, formData])
  }
  const handleCreateTestType = (newTestType) => {
    if(!testTypes.includes(newTestType)){
      setTestTypes([...testTypes, newTestType])
    }else{
      alert(`Test Type ${newTestType} already exists`)
    }
  }

  const handleEdit = (index) => {
    console.log(`Editing data at index ${index}`);
    setEditIndex(index)
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  const handleUpdate = (updatedData) => {
    setFormDataList((prevDataList) =>
      prevDataList.map((data, index) => (index === editIndex ? updatedData : data))
    );
    setEditIndex(null);
  };


  const handleDelete = (index) => {
    setFormDataList((prevDataList) => prevDataList.filter((_, i) => i !== index));
  };
  return (
    <div>
      
      <FormInput testTypes={testTypes} onSubmit={handleSubmit} onCreate={handleCreateTestType}/>
      <TableData1 data={formDataList} onDelete={handleDelete} onEdit={handleEdit}/>
      {editIndex !== null && (
        <EditForm
          data={formDataList[editIndex]}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      )}
      <TableTestData2 data={formDataList} />
      
    </div>
  );
}

export default App;

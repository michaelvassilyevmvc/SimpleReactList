import React, { useState } from 'react'
import PersonForm from '../personform/PersonForm'
import PersonList from '../personlist/PersonList'

function PersonApp() {

  const [personList, setPersonList] = useState([]);
  const [IsListVisible, setListVisible] = useState();


  const addItem = (name, age) => {
    setPersonList([...personList, { name: name, age: age }]);
    setListVisible(true);
  }

  return (
    <div>
      <PersonForm AddItem={addItem} ></PersonForm>
      <PersonList lists={personList} IsVisible={IsListVisible}></PersonList>
    </div>
  )
}

export default PersonApp;

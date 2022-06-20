import React, { useState } from 'react'

function PersonForm({ AddItem }) {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const ButtonClick = (e) => {
    e.preventDefault();
    if (name === '' || age === '') {
      alert('Please enter a valid name and age (not-empty values).');
      return;
    }

    console.log(isNaN(age));

    if (isNaN(Number(age)) || Number(age) <= 0) {
      alert('Please enter a valid age (>0)');
      setAge('');
      return;
    }

    AddItem(name, age);
    setName('');
    setAge('');
  }

  const ChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }


  const ChangeAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  }

  return (
    <div className="person__form">
      <div className="person__input-block">
        <label className="person__title">User name</label>
        <input className="person__input" value={name} type="text" onChange={ChangeName} ></input>
      </div>
      <div className="person__input-block">
        <label className="person__title">Age (User)</label>
        <input className="person__input" value={age} onChange={ChangeAge} ></input>
      </div>
      <button className="btn btn-violet" onClick={ButtonClick}>Add User</button>
    </div>
  )
}

export default PersonForm;
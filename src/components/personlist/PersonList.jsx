import React from 'react'

function PersonList({ lists, IsVisible }) {



  return (
    <div>
      {!IsVisible && <div className="no-message">No lists</div>}
      {IsVisible && <ul className="person__list-block" >
        {IsVisible && lists.map((list, index) => (<li key={index} className="person__list-item">{list.name} ({list.age} years old)</li>))}
      </ul>}
    </div>
  )
}

export default PersonList
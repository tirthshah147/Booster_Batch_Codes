import React from 'react'

export default function Popup() {
  return (
    <div className='popup-block'>
          <div className='popup-card'>
            <div className='delete-symbol--large'>x</div>
            <div className='popup-details'>
              <label>Title</label> <br />
              <input type="text" name=''/> <br />
              <label>Description</label><br />
              <textarea name='' cols="30" rows="10"></textarea><br />
              <label>Status</label><br />
              <select name="" id=""><br />
                <option value="">Ongoing</option><br />
                <option value="">Completed</option><br />
              </select><br/>
              <button className='popup-button'>Save</button>
              <button className='popup-button'>Create</button>
            </div>
          </div>
        </div>
  )
}

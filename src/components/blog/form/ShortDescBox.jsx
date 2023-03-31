import React from 'react'
import '../../../css/blog/form/ShortDescBox.css'

function ShortDescBox({value,handleChange}) {
  return (
    <div>
      <textarea
              className="inputbox"
              rows="2"
              placeholder='Short Description'
              name='ShortDescription'
              value={value}
              onChange={handleChange}
            />
    </div>
  )
}

export default ShortDescBox

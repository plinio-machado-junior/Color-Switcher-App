import React from 'react'

const AddColor = ({color, setColor, isDarkText, setIsDarkText, }) => {
  return (
    <div className='color-container'>
        <div className="color__box" style={{backgroundColor: color, color: isDarkText ? "white" : "black"}}>
          <div className="color__name">
          {!color ? "Empty Value" : color}
          </div>
        </div>
        <form autoComplete='off' onSubmit={e => e.preventDefault()}>
        <input
        type="text"
        placeholder='Add color name'
        id='inColor'
        autoFocus
        value={color}
        onChange={e => setColor(e.target.value)}/>
        <button onClick={() => setIsDarkText(!isDarkText)}>Change Text color</button>
        </form>
      </div>
  )
}

export default AddColor
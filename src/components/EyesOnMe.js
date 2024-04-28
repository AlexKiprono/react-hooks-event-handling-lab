import React, { useState } from 'react'

function EyesOnMe() {

    const [isFocused, setisFocused] = useState(false);


    const handleFocus = () => {
        setisFocused(true)
        console.log('Good!');
    }

    const handleBlur = () => {
        setisFocused(false)
        console.log('Hey! Eyes on me!');
    }

  return (
    <div>

        <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
        </button>
      
    </div>
  )
}

export default EyesOnMe;
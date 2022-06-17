import React from 'react'

const CatList = ({ catPics = [] }) => {
 
  return (
    <div>
        {catPics.map(c => <img key={c.id} src={c.url} alt="cat" width="250"></img>)}
    </div>
    
  )
}

export default CatList

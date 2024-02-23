import React from 'react'
import pdf from "../images/Samplepdf.pdf";

const FlipBook = () => {
  return (
    <div>
      <iframe src={pdf} width='100%' height='500px' type="application/pdf" title='PDF viewer'/>
    </div>
  )
}

export default FlipBook
import React from 'react'

const Test = ({name,age}) => {
  return (
    //reactfragment หรือ div จะส่งออกไปก้อนใหญ่ ก้อนเดียวเท่านั้น
    <>
        <div>ชื่อ : {name} อายุ :  {age}</div>
       
    </>
  )
}

export default Test
// {}บอกว่าคือตัวแปร
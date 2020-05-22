import React from 'react'
const Hello=()=>{
  // return (
  //   <div>
  //   <h1>This is another Hello!</h1>
  //   </div>
  // )
  return React.createElement('div',         //jsx
  {id:'helo',class:'dummyclass'},
  React.createElement('h1',null,'This is another Hello!'))
}
export default Hello

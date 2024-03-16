
const Lab01 = () => {
  return (
    <div className='space-y-5 pl-5'>
      <h2>Hello world</h2>
      <hr />
      <div>
        <h4>Live Search: React Application</h4>
        <input className='rounded p-2' type="text" placeholder='Search ...' />
      
      </div>
      <hr />
      <div>
        <p>Current Time</p>
        <h4>{getTime()}</h4>
      </div>
    </div>
  )
}
const getTime= () =>{
  return ( new Date()).toLocaleDateString();
}
export default Lab01
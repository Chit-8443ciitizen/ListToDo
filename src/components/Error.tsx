import React from 'react'

function Error() {
  return (
    <div className='text-center my-40 flex flex-col space-y-10'>
        <p>Error</p>
        <a className='hover:text-cyan-600 flex flex-row items-center' href='/signIn'>
            <span className="material-symbols-outlined">
                arrow_back
            </span>
            Haven't you signed in ?</a>
    </div>
  )
}

export default Error
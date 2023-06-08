import React from 'react'

function userProfile({params} : any) {
  return (
      <div>user Profile of {params.id}</div>
  )
}

export default userProfile
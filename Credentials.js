import React from 'react'
 
function Credentials() {
  const logindata = ()=>{

    var url ="http://localhost:8080/login_db";
    fetch(url)
    .then(response =>response.json())
    .then(serverinfo =>{

        if(serverinfo.length>0){

            console.log(serverinfo);
        } 
    })

}
  return (

    <div>
      
      <p>Please, wait Loding index file...!</p>
    </div>
  )
}

export default Credentials

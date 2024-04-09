export async function addRecord(payload){
   let response = await fetch('/maincateogary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:payload})

    })
    console.log("payload"+payload)  
    return await response.json(); 
    // Properly wait for the JSON parsing

}

export async function getRecord(){
    let response = await fetch('/maincateogary', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await response.json(); // Properly wait for the JSON parsing


}
export async function updateRecord(payload){
    let response = await fetch('/maincateogary/' + payload.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)

    })
    console.log("response"+response)
    console.log("id"+payload.id)
    return await response.json(); // Properly wait for the JSON parsing

}
export async function deleteRecord(payload){
    let response = await fetch("/maincateogary/" + payload.id, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      return await response.json(); // Properly wait for the JSON parsing
  
}
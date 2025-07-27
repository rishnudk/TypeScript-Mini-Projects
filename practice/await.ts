
// asynchronous operations using promise & async/await

function fetchData (id: number) : Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id> 0) {
            resolve('solved')
        } else {
            reject ('invalid id')
        }
        }, 10000)
        
    })
} 

fetchData(1)
.then(data => console.log(data))
.catch(err => (console.error('error', err)))




// async function getData(id:number) : Promise<void> {
//     try {
//         const result = await fetchData(id);
//         console.log(result)
//     } catch(error) {
//         console.error('caught error', error)
//     }
    
// }
// getData(1)
// getData(-1)
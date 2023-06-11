document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data[0].meanings[0].definitions)
        

        // data[0].meanings[0].definitions.forEach(obj =>{
        //     console.log(obj.definition)
        //     //create an li
        //     const li = document.createElement('li')
        //     //add text to li
        //     li.textContent = obj.definition
        //     //append the li to the ul
        //     document.querySelector('ul').appendChild(li)
        // })

        // console.log(data)

      data[0].meanings.forEach(obj => {
        if(obj.partOfSpeech === 'noun'){

          obj.definitions.forEach(def =>{
          console.log(def.definition)

         const li = document.createElement('li')
          //add text to li
          li.textContent = def.definition
          //append the li to the ul
          document.querySelector('#noun').appendChild(li)
          })
          }
        else if(obj.partOfSpeech === 'verb'){
          obj.definitions.forEach(def =>{
            console.log(def.definition)

            const li = document.createElement('li')
            //add text to li
            li.textContent = def.definition
            //append the li to the ul
            document.querySelector('#verb').appendChild(li)
          })
          }
        else if(obj.partOfSpeech === 'adverb'){
          obj.definitions.forEach(def =>{
            console.log(def.definition)
      
            const li = document.createElement('li')
            //add text to li
            li.textContent = def.definition
            //append the li to the ul
            document.querySelector('#adverb').appendChild(li)
            })
            }
        else if(obj.partOfSpeech === 'verb'){
          obj.definitions.forEach(def =>{
            console.log(def.definition)
    
            const li = document.createElement('li')
            //add text to li
            li.textContent = def.definition
            //append the li to the ul
            document.querySelector('#verb').appendChild(li)
            })
            }
        else{
          obj.definitions.forEach(def =>{
            console.log(def.definition)
        
            const li = document.createElement('li')
            //add text to li
            li.textContent = def.definition
            //append the li to the ul
            document.querySelector('#adjective').appendChild(li)
            })
            }
          // console.log(obj.partOfSpeech)
        })
       
        // document.querySelector('h3').innerText += data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

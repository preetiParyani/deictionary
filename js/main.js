document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data[0].meanings[0].definitions)
        // data[0].meanings.foreach(obj => {

        // })

        data[0].meanings[0].definitions.forEach(obj =>{
            console.log(obj.definition)
            //create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.definition
            //append the li to the ul
            document.querySelector('ul').appendChild(li)
        })

        console.log(data)
       
        // document.querySelector('h3').innerText += data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

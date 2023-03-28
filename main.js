//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    // reset btn
    resetSearch()

  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector("h2").innerText += data.name

        if(data.subclasses.length > 0 && data.classes.length > 0) {
            for(let i = 0; i < data.subclasses.length; i++) {
                document.querySelector("h4").innerText += ` ${data.subclasses[i].name} `
            }

            for(let i = 0; i < data.classes.length; i++) {
                document.querySelector("h3").innerText += ` ${data.classes[i].name} `
            }


        } else if(data.classes.length > 0 && data.subclasses.length == 0) {
            for(let i = 0; i < data.classes.length; i++) {
                document.querySelector("h3").innerText += ` ${data.classes[i].name} `
                document.querySelector("h4").innerText = "There are not subclasses"
            }
        } else if (data.subclasses.length > 0 && data.classes.length == 0) {
                document.querySelector("h4").innerText += ` ${data.subclasses[i].name} `
                document.querySelector("h3").innerText = "There are not classes"

        } else if (data.classes.length == 0 && data.subclasses.length == 0) {
            document.querySelector("h3").innerText = "There are not classes"
            document.querySelector("h4").innerText = "There are not subclasses"
        }


       


       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function resetSearch() {
    document.querySelector("h2").innerText = "Name?"
    document.querySelector("h3").innerText = "Class?"
    document.querySelector("h4").innerText = "Sub Classes?"

}


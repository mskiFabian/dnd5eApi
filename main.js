//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener("click", getFetch)
// 
let nameText = document.querySelector("h2")
let classesText = document.querySelector("h3")
let subclassesText = document.querySelector("h4")



function getFetch(){
    // reset btn
    resetSearch()
  
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
  
        nameText.innerText += data.name
  
        //creating li for classes
        let liForClasses = document.createElement("li")
  
        //creating li for sub classes
        if(data.subclasses.length > 0 && data.classes.length > 0) {
          for(let i = 0; i < data.subclasses.length; i++) {
            let liForSubClasses = document.createElement("li")
            liForSubClasses.innerText = `${data.subclasses[i].name}`
            document.querySelector(".for-sub-class").appendChild(liForSubClasses)
          }
  
          for(let i = 0; i < data.classes.length; i++) {
            liForClasses.innerText += ` ${data.classes[i].name} `
            document.querySelector(".for-class").appendChild(liForClasses)
          }
  
        } else if (data.subclasses.length > 0 && data.classes.length == 0) {
          for(let i = 0; i < data.subclasses.length; i++) {
            let liForSubClasses = document.createElement("li")
            liForSubClasses.innerText = `${data.subclasses[i].name}`
            document.querySelector(".for-sub-class").appendChild(liForSubClasses)
          }
          classesText.innerText += " There are no classes"
  
        } else if(data.classes.length > 0 && data.subclasses.length == 0) {
          for(let i = 0; i < data.classes.length; i++) {
            liForClasses.innerText += ` ${data.classes[i].name} `
            document.querySelector(".for-class").appendChild(liForClasses)
          }
          subclassesText.innerText += " There are no subclasses"
  
        } else if (data.classes.length == 0 && data.subclasses.length == 0) {
          classesText.innerText = " There are no classes"
          subclassesText.innerText = " There are no subclasses"
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
    document.querySelector(".for-sub-class").innerHTML = ""
    document.querySelector(".for-class").innerHTML = ""

}


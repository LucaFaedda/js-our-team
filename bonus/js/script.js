
let team_array = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "Angela-Lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }

]

const listaTeam = document.getElementById('team')

for(let i=0; i< team_array.length; i++){
console.log(team_array[i])
    
    let team = team_array[i]
    listaTeam.innerHTML += `<div class="card m-2 " style="width: 18rem;">
  <img src="./img/${team.image}" class="card-img-top" alt="immagine-team"> 
  <div class="card-body">
    <h3 class="card-text"> ${team.name}</h3>
    <p class="card-text">Ruolo: ${team.role}</p>
  </div>
</div>`
        
// nell'immagine non serve il puntino in più perchè noi lo inseriamo direttamente in HTML viene letto lì
}




/* METODO FABRIZIO CON FUNZIONE

Definisco una funzione

function drawTeamMember(person)
{
    const listaTeam = document.getElementById('team')
    let member_card = ` 
    <div class="team-card">
    <div class = "card-image">
    <img class="img-fluid" src="./img/${team.image}" alt="${person-name}"
    </div>
    <div class = "card-text">
    <p class="card-text">Nome e Cognome : ${team.name}</p>
    <p class="card-text">Ruolo: ${team.role}</p>
    </div>
    </div>`

}

for(let i=0; i< team_array.length; i++){
console.log(team_array[i])
    
    let team = team_array[i]
    drawTeamMember(team)

}*/
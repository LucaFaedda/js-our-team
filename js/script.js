
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

const listaTeam = document.querySelector('.lista-team')

for(let i=0; i< team_array.length; i++){
console.log(team_array[i])
    
    let team = team_array[i]
    for(let key in team){
        team = `<p class="text-white">${team[key]}</p>`
        listaTeam.innerHTML += team
        console.log(team[key])
    }
}
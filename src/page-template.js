const managerCard = (manager) => {
    return `
    <div class="card manager m-2" style="width: 18rem;">
            <div class="card-body bg-info">
                <h2 class="card-title">${manager.name}</h2>
                <h4 class="card-text">Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span style="font-weight: 500;">ID:</span> ${manager.id}</li>
                <li class="list-group-item"><span style="font-weight: 500;">Email:</span> <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item"><span style="font-weight: 500;">Office Number:</span> ${manager.officeNumber}</li>
            </ul>
        </div>`
}

const engineerCard = (engineer) => {
    return `
    <div class="card engineer m-2" style="width: 18rem;">
        <div class="card-body bg-info">
            <h2 class="card-title">${engineer.name}</h2>
            <h4 class="card-text">Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span style="font-weight: 500;">ID:</span> ${engineer.id}</li>
            <li class="list-group-item"><span style="font-weight: 500;">Email:</span> <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item"><span style="font-weight: 500;">GitHub:</span> <a href="https://github.com/${engineer.github}" target="_blanlk">${engineer.github}</a></li>
        </ul>
    </div>
`
}

const internCard = (intern) => {
    return `
    <div class="card intern m-2" style="width: 18rem;">
        <div class="card-body bg-info">
            <h2 class="card-title">${intern.name}</h2>
            <h4 class="card-text">Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span style="font-weight: 500;"">ID:</span> ${intern.id}</li>
            <li class="list-group-item"><span style="font-weight: 500;">Email:</span> <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item"><span style="font-weight: 500;">School:</span> ${intern.school}</li>
        </ul>
    </div>    
`
}

const render = (joinCards) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Team Page</title>
</head>

<body>
    <header>
       <h1 class="d-flex justify-content-center bg-primary">Our Team</h1>
    </header>
    <div class="container team-members row g-2 justify-content-center">     
    ${joinCards}
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>  

</body>

</html>
`
}

const createTeamHtml = (team) => {
    let cards = [];
    let employee;

    for (i = 0; i < team.length; i++) {
        employee = team[i];
        if(employee.officeNumber) {
            cards.push(managerCard(employee));
        } else if(employee.github) {
            cards.push(engineerCard(employee));
        } else {
            cards.push(internCard(employee));
        }
    }
    return render(cards.join(''))
}

module.exports = createTeamHtml;
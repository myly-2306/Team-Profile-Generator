const Manager = require ("./lib/manager")
const Engineer = require ("./lib/engineer")
const Intern = require ("./lib/intern")
const inquirer = require ("inquirer")
const path = require ("path")
const fs = require ("fs")
const createTeamHtml = require ("./src/page-template")
const team = []


function createTeam(){
    inquirer.prompt ([
        {
            type: "list",
            name: "memberSelect",
            message: "What type of employee do you want to add?",
            choices: ["manager", "engineer", "intern", "no one else"]
        }
    ])
    .then(mickeyMouse => {
        switch (mickeyMouse.memberSelect){
           case "manager":
               addManager()
               break;
            case "engineer":
                addEngineer()
                break;
            case "intern":
                addIntern()
                break
            default:
                buildTeam()
        }
    })
}



function addManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "mName",
            message: "what is the managers name?"
        },
        {
            type: "input",
            name: "mId",
            message: "what is the managers id"
        },
        {
            type: "input",
            name: "mEmail",
            message: "what is the managers email?"
        },
        {
            type: "input",
            name: "mOffice",
            message: "What is the managers office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.mOffice)
        team.push(manager)
        createTeam()
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "eName",
            message: "what is the engineers name?"
        },
        {
            type: "input",
            name: "eId",
            message: "what is the engineers id"
        },
        {
            type: "input",
            name: "eEmail",
            message: "what is the engineers email?"
        },
        {
            type: "input",
            name: "eGit",
            message: "What is the engineers github?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.eGit)
        team.push(engineer)
        createTeam()
    })
}


function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "iName",
            message: "what is the interns name?"
        },
        {
            type: "input",
            name: "iId",
            message: "what is the interns id"
        },
        {
            type: "input",
            name: "iEmail",
            message: "what is the interns email?"
        },
        {
            type: "input",
            name: "iSchool",
            message: "What is the interns school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.iSchool)
        team.push(intern)
        createTeam()
    })
}

const outputDir = path.resolve(__dirname, "output")
const outputPath = path.join(outputDir, "myteam.html")




function buildTeam(){
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir)
    }
    fs.writeFileSync(outputPath, createTeamHtml(team), "utf-8")
}

createTeam()



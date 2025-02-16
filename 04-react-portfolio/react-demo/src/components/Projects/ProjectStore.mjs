class Project{
    constructor(logo,title, description, link, arrow){
        this.logo=logo
        this.title= title
        this.description= description
        this.link= link
        this.arrow= arrow
    }
}
class ProjectStore{
    constructor(){
        this.projects = []
    }
    addProject(project){
        this.projects.push(project)
    }
    getProjects() {
        return this.projects;
    }
}
const p1= new Project('./images/netkool.svg','Netkool','Networking platform for school students','netkool.io')
const p2= new Project('./images/webby.svg','Webby','Website analytics platform','webby.dev')
const projectList = new ProjectStore()
projectList.addProject(p1)
projectList.addProject(p2)
export default projectList;
class Talk{
    constructor(blogImg, language, title, description){
        this.blogImg= blogImg
        this.language= language
        this.title= title
        this.description= description
    }
}
class TalkStore{
    constructor(){
        this.talks = []
    }
    addTalk(talk){
        this.talks.push(talk)
    }
    getTalks() {
        return this.talks;
    }
}
const t1= new Talk('./images/js.jpeg','Javascript','Dynamic Programming Alogorithms in Javascript','In this talk,I explain the different DP algos that are important for cracking..')
const t2= new Talk('./images/react.jpeg','ReactJS','Optimise rendering of componenets in ReactJS','The real magic happens when you have thousands of componenets rendering..')
const t3= new Talk('./images/nextjs.jpeg','NextJS','Dynamic routes with Server side rendering in NextJS',' Imagine you want all your blog pages to be SEO optimised, an performant..')

const talkList = new TalkStore()
talkList.addTalk(t1)
talkList.addTalk(t2)
talkList.addTalk(t3)
export default talkList;
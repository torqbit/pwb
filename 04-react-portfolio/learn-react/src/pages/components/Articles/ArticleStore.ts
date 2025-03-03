class Article{

    blogImg: string;
    dateOfPublish: string;
    category:string;
    title:string;
    description: string;
    readLink:string;
    linkLogo:string

    constructor(blogImg: string, dateOfPublish: string, category: string, title: string, description: string, readLink: string, linkLogo: string){
        this.blogImg=blogImg
        this.dateOfPublish= dateOfPublish
        this.category=category
        this.title= title
        this.description=description
        this.readLink= readLink
        this.linkLogo= linkLogo
    }
}
class ArticleStore{
    articles:Article[]
    constructor(){
        this.articles = []
    }
    addArticle(article:Article){
        this.articles.push(article)
    }
    getArticles() {
        return this.articles;
    }
}
const a1= new Article('./images/meetup.png','20th Jan 2025','Meetups','How to use Meetups to generate leads','You talk aboout something you built, and share the strategy of how someone made benefit out of it, and thats it.You are onto to your...','Read Post')
const a2= new Article('./images/art-of-debug.png','2nd Jan 2025','Engineering','The Art of Debugging',' We all spent countless hours in debugging and optimizing backend applications do we take time to practice clean coding in...','Read Post')
const a3= new Article('./images/vscode-plugin.png','5th Jan 2025','Engineering','The power of VSCode plugins',' Your development environment-VSCode, is more powerful than you would have imagined. If you want to accelerate your development...','Read Post')
const a4= new Article('./images/focus.png','20th Jan 2025','Meetups','Focus is everything',"Your workplace isn't just about a table,chair and laptop. Its a piece where you craft the art,that can run systems of multiple companies",'Read Post')
const articleList = new ArticleStore()
articleList.addArticle(a1)
articleList.addArticle(a2)
articleList.addArticle(a3)
articleList.addArticle(a4)

export default articleList;
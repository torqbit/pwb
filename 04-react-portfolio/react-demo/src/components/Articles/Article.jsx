import "./Article.css"
export function Articles({title,article}){
    return(
    <section id="2" className="article">
        <p>{title}</p>
        <hr />
        <div className="grid">
        {article.map(article => 
            <ArticleClass  
            blogImg={article.blogImg} 
            dateOfPublish={article.dateOfPublish} 
            category={article.category} 
            title={article.title} 
            description={article.description} 
            readLink={article.readLink} 
            linkLogo={article.linkLogo}
            /> 
        )}
        </div>
    </section>
    )
}
    
const ArticleClass= ({blogImg, dateOfPublish, category, title, description, readLink, linkLogo})=> (
    <div className="blog">
        <div className="image">
          <img src={blogImg}/>
          <div className="date">
            <p>{dateOfPublish}</p>
            <p>{category}</p>
          </div>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <a href="#" className="article__link">
          <p>{readLink}</p>
          <i>
            <svg>{linkLogo}</svg>
          </i>
        </a>
      </div>
)
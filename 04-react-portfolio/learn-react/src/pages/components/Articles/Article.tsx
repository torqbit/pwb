import styles from '@/styles/Article.module.css'
import {FC} from "react";
import articleList from './ArticleStore';

export type ArticleProps = {
    blogImg: string;
    dateOfPublish: string;
    category: string;
    title: string;
    description: string;
    readLink: string;
    linkLogo: string;
}

export const Articles: FC<{articles: ArticleProps[]}> = ({articles}) => {
    return(
    <section id="2" className={styles.article}>
        <p>Articles</p>
        <hr />
        <div className={styles.grid}>
        {articles.map(article => 
            <ArticleCard
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
    
const ArticleCard: FC<{blogImg: string, dateOfPublish:string, category:string, title:string, description:string, readLink:string, linkLogo:string}>=({blogImg, dateOfPublish, category, title, description, readLink, linkLogo}) => (
    <div className= {styles.blog}>
        <div className={styles.image}>
          <img src={blogImg}/>
          <div className={styles.date}>
            <p>{dateOfPublish}</p>
            <p>{category}</p>
          </div>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <a href="#" className={styles.article__link}>
          <p>{readLink}</p>
          <i>
            <svg>{linkLogo}</svg>
          </i>
        </a>
      </div>
)
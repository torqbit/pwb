import './App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Articles } from './components/Articles/Article';
import articleList from './components/Articles/ArticleStore.mjs';
import { Projects } from './components/Projects/Project';
import projectList from './components/Projects/ProjectStore.mjs';
import { Talks } from './components/Talks/Talk';
import talkList from './components/Talks/TalkStore.mjs';


function App() {
  let count=0
  const onClickHandler = () => { 
    count++
    console.log(count)
  }
  return (
    <div className="App">
      <Nav firstname="AISHA" lastname='AGARWAL' onClickHanlder={onClickHandler} count={count} links={['About', 'Article', 'Projects','Talks']} navlogo="/images/phone.svg" content="Lets's Talk"/>
      <About img={"/images/uifaces-popular-image.jpg"} introduction="I am a FullStack-Developer" name= "Aisha" />
      <Articles title= "Articles" article={articleList.getArticles()}/>
      <Projects title= "Projects" project={projectList.getProjects()}/>
      <Talks title= "Talks" talk={talkList.getTalks()}/>
    </div>
  );
}


export default App;

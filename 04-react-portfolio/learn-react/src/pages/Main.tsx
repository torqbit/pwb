import { Nav } from './components/Nav/Nav';
import { About } from './components/About/About';
import { Articles } from './components/Articles/Article';
import articleList from  './components/Articles/ArticleStore.js'
import {Projects} from './components/Projects/Project'
import projectList from './components/Projects/ProjectStore'
import { Talks } from './components/Talks/Talk';
import talkList from './components/Talks/TalkStore';
import { useContext } from 'react';
import { AppContext } from './components/AppContext';


function App() {
  let count=0
  const onClickHandler = () => { 
    count++
    console.log(count)
  }

  const { user, userArticle}  = useContext(AppContext)
  return (
    
    <>
      {user && (<About {...user} />)}
      {userArticle && (<Articles {...userArticle} />)}

    </>
    
  );
}


export default App;

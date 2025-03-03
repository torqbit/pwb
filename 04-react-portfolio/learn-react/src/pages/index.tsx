import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signUp.module.css'
import { About } from "./components/About/About";
import { AppContext } from "./components/AppContext";
import App from "./Main";
import articleList from  './components/Articles/ArticleStore.js'
import { ArticleProps } from "./components/Articles/Article";
import { Articles } from "./components/Articles/Article";

export type UserProfile = {
    img: string;
    name: string;
    description: string;
    articles: ArticleProps[]
}


const HomePage =()=>{
    const [userProfile, setUserProfile]= useState<UserProfile>({name: '', img:'', description:'', articles: []});
    const [loggedInUser, setLoggedInUser] = useState("")
    const userinformation = localStorage.getItem(`${loggedInUser}-articles`) || '{}'
    
    
    
    const getCookie=(name: string)=> {
        const cookies = document.cookie.split(";");
        const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
        return cookie ? cookie.split("=")[1] : null;
      }
      const router= useRouter()
      
    const getRememberedUser =()=> {
        const userEmail = getCookie("email");
        
        if (userEmail) {
            setLoggedInUser(userEmail)
            setUserProfile({...userProfile, articles: JSON.parse(userinformation)})
        }
        else{
            router.push('/signup')
        }
    
      }

    useEffect(() =>{
        getRememberedUser();
    }, []);

    return(
        <div>
            <About name={userProfile.name} description={userProfile.description} img={userProfile.img}/>
            <Articles  articles={userProfile.articles} />
        </div>
    )
};
export default HomePage

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArticleProps } from "./Article";



const ArticlePage =()=>{
    const [userArticle, setUserArticle]= useState<ArticleProps>({
        blogImg: "",
        category: "",
        title: "",
        dateOfPublish: "",
        linkLogo: "",
        description: "",
        readLink: ""
    });

    const [loggedInUser, setLoggedInUser] = useState("")
    
    const handleArticleSubmit = () => {
        localStorage.setItem(`${loggedInUser}-articles`, JSON.stringify([userArticle]))
    }

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
        return userEmail;
        }
        else{
            router.push('/signup')
        }
        return null;
      }

    useEffect(() =>{
       getRememberedUser();
    }, []);

    return(
        <form>
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          value={userArticle?.title}
          onChange={(e: any) => {
            setUserArticle({...userArticle, title: e.currentTarget.value})
          }
        }
          required
        />
       
        <button type="button" onClick={(e: any) => handleArticleSubmit() }>Submit</button>
      </form>
    )
};
export default ArticlePage

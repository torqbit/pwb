import { createContext, Dispatch } from "react"
import { UserProfile } from "../index"
import { ArticleProps } from "./Articles/Article"


type AppState = {
    user: UserProfile  | null
    isloading: boolean
}
type ActionType= {
    _type: string
    payload?: UserProfile
}

type LOGIN_START = {
    _type: "LOGIN_START"
}

type LOGIN_SUCCESS = {
    _type: "LOGIN_SUCCESS",
    payload: UserProfile
}

type LOGOUT = {
    _type: "LOGOUT"
}

type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGOUT

const initialAppState: AppState = {
    user: null,
    isloading: false
}

export const appReducer = (state: AppState, action: UserAction): AppState => {
    switch(action._type){
        case "LOGIN_START":
            return {
                ...state,
                isloading: true
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isloading: false,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isloading: false
            }
    }     

}

type AppContextType = {
    state : AppState
    dispatch: React.Dispatch<ActionType>
}
    
export const AppContext = createContext<AppContextType>({state: initialAppState, dispatch: () => null}) 
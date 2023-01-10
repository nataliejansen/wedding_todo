import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../base'
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


//login
const githubAuthProvider = new GithubAuthProvider()

async function login() {
    return (signInWithPopup(auth, githubAuthProvider).then(authData => {
        console.log(authData)
        setCurrentUser(authData.user)
    }))
}

//logout
async function logout() {
    signOut(auth).then(setCurrentUser(null))
}

//holds currentUser functions
const value = {currentUser, login, logout}

useEffect(() => {
        
    const authChange = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })

    return authChange;

}, []);

return(
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)

}

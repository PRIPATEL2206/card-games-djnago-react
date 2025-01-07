import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface UsernameContextInterface {
    hasUsername: boolean,
    username: string | undefined,
    changeUsername: (username: string) => void
    removeUsername: () => void
}

const UsernameContext = createContext<UsernameContextInterface | undefined>(undefined);


const useUsername = () => {
    const context = useContext(UsernameContext);
    if (context === undefined) {
        throw new Error("useUsername must most be use with in a UsernameProvider");
    }
    return context;
}

interface UsernamePropsInterface {
    children: ReactNode,
}

const UsernameProvider: React.FC<UsernamePropsInterface> = ({ children }) => {
    const [username, setUsername] = useState<string>();
    const [hasUsername, setHasUsername] = useState(false);

    const changeUsername = (username: string) => {
        setUsername(username);
    }
    const removeUsername = () => {
        setUsername(undefined);
    }

    useEffect(() => {
        if (localStorage.getItem('username') !== null) {
            changeUsername(localStorage.getItem('username')!)
            setHasUsername(true);
        }
    }, [])

    useEffect(() => {
        const localUsername = localStorage.getItem('username');
        
        if (username) {
            localStorage.setItem('username', username)
            setHasUsername(true);
            console.log(hasUsername)
            return 
        }
        
        else if (localUsername) {
            localStorage.removeItem('username')
        }
        setHasUsername(false);
    }, [username])



    return <UsernameContext.Provider value={{ username, changeUsername, hasUsername, removeUsername }}>
        {children}
    </UsernameContext.Provider>
}



export { UsernameProvider, useUsername }
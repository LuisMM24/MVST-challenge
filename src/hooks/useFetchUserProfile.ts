import { useEffect, useState } from "react"



const useFetchUserProfile = (userEndpoint: string): [
    IUserProfile | null, boolean, string | null
] => {
    const [userProfile, setUserProfile] = useState<IUserProfile | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchFirstUser = async (): Promise<void> => {
            setIsLoading(true)
            setError(null)
            try {
                const res = await fetch(`https://api.github.com/users${userEndpoint}`)
                if (!res.ok) throw new Error("Failed to fetch to API")
                setUserProfile(await res.json())
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message)
                    return;
                }
                setError("Unexpected error")

            } finally {
                setIsLoading(false)
            }

        }
        fetchFirstUser()
    }, [userEndpoint])

    return [userProfile, isLoading, error]
}

export default useFetchUserProfile
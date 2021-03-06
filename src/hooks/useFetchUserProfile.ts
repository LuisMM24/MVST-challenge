import { useEffect, useState } from "react";

/* In this custom hook we're using a generic type */
/* This generic type normally will receive a IUserProfile interface or IUserRepository interface */
const useFetchUserProfile = <T>(
  userEndpoint: string
): [T | null, boolean, string | null] => {
  const [userProfileItems, setUserProfileItems] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFirstUser = async (): Promise<void> => {
      /* Setting the states to def to fetch new items */
      setIsLoading(true);
      setError(null);
      /* try catch to prevent errors */
      try {
        const res = await fetch(`https://api.github.com/users${userEndpoint}`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_APITOKEN}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch to API");
        setUserProfileItems(await res.json());
      } catch (e) {
        /* avoid uknown errors of API */
        if (e instanceof Error) {
          setError(e.message);
          return;
        }
        setError("Unexpected error");
      } finally {
        /* Finally finish loading state*/
        setIsLoading(false);
      }
    };
    fetchFirstUser();
  }, [userEndpoint]);

  return [userProfileItems, isLoading, error];
};

export default useFetchUserProfile;

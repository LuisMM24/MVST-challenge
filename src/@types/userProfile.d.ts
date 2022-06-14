interface IUserProfile {
    name: string;
    login: string;
    bio: string;
    avatar_url: string;
    repos_url: string;
    followers: number;
    following: number;
    location?: string;
}

interface IUserRepository {
    id: number;
    name: string;
    private: boolean;
    language: string;
    updated_at: string;
}
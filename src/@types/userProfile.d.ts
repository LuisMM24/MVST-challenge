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

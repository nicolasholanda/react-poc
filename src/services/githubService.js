const BASE_URL = 'https://api.github.com';

export const searchUsers = async (username) => {
    const response = await fetch(`${BASE_URL}/search/users?q=${username}`);
    return response.json();
};
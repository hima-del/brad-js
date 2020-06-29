class GitHub {
    constructor() {
        this.client_id = '7cfaa524e99bc5d48d82';
        this.client_secret = 'e012d42f1457de91a552eb8e9fe90a83fa5d5c95';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}
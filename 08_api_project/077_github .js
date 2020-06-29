class GitHub {
    constructor() {
        this.client_id = '7cfaa524e99bc5d48d82';
        this.client_secret = 'e012d42f1457de91a552eb8e9fe90a83fa5d5c95';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}
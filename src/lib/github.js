import { Octokit } from "@octokit/rest";

export async function getGithubUser(username) {
    const octokit = new Octokit();

    try {
        const { data } = await octokit.users.getByUsername({
            username: "VictorNatan210"
        });

        return data.avatar_url;
    } catch (err) {
        console.error(`Something goes wrong...${err}`);
    }
    
}
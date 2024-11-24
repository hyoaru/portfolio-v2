import { GithubEventType, GithubRecentCommitType } from "@constants/main/types"

export default async function getGithubRecentCommit() {
  const data = await fetch('https://api.github.com/users/hyoaru/events')
    .then((res) => res.json() as Promise<GithubEventType>)
    .then((events) => events.filter((event) => event.type === 'PushEvent')?.[0])
    .then((recentPushEvent) => {
      const commits = recentPushEvent.payload.commits
      const data: GithubRecentCommitType = {
        repository_name: recentPushEvent.repo.name,
        commit_message: commits?.[commits.length - 1]?.message,
        created_at: recentPushEvent.created_at,
      }
      return data
    })

  return data
}
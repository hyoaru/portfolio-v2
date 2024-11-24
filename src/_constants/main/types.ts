export type GithubContributionStatsType = {
  total: Record<string, number>
  contributions: {
    date: string
    count: number
    level: number
  }[]
  totalContribution?: number
}

export type GithubBaseUserInformationType = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string
  location: string
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export type GithubEventType = {
  id: string
  type: string
  public: boolean
  created_at: string
  actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: string
    url: string
    avatar_id: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  payload: {
    ref: string
    ref_type?: string
    master_branch?: string
    description?: string
    pusher_type?: string
    repository_id?: number
    push_id?: number
    size?: number
    distinct_size?: number
    head?: string
    before?: string
    commits?: {
      sha: string
      author: {
        email: string
        name: string
      }
      message: string
      distinct: boolean
      url: string
    }[]
  }
}[]

export type GithubRecentCommitType = {
  repository_name: string
  commit_message?: string
  created_at: string
}

export type LastFmRecentlyListenedTracksType = {
  recenttracks: {
    track: {
      mbid: string
      name: string
      url: string
      streamable: string
      artist: {
        mbid: string
        "#text": string
      }
      image: {
        size: string
        "#text": string
      }[]
      date: {
        uts: string
        "#text": string
      }
      album: {
        mbid: string
        "#text": string
      }
    }[]
    '@attr': {
      user: string
      totalPages: string
      page: string
      perPage: string
      total: string
    }
  }
}

export type LastFmRecentlyListenedTrackType = {
  image_url: string
  artist: string
  title: string
}

export type TechnologyType = {
  name: string
  logo: string
}

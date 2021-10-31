import { gql } from 'graphql-request'

const query = gql`
query ($season: MediaSeason, $year: Int, $previousSeason: MediaSeason, $previousYear: Int, $format: MediaFormat, $excludeFormat: MediaFormat, $status: MediaStatus, $minEpisodes: Int, $page: Int, $sort: [MediaSort]) {
  tv: Page(page: $page) {
    pageInfo {
      hasNextPage
      total
    }
    media(season: $season, seasonYear: $year, format: TV, format_not: $excludeFormat, status: $status, episodes_greater: $minEpisodes, isAdult: false, type: ANIME, sort: $sort) {
      ...media
    }
  }
  rest: Page(page: $page) {
    pageInfo {
      hasNextPage
      total
    }
    media(season: $season, seasonYear: $year, format: $format, format_not: TV, status: $status, episodes_greater: $minEpisodes, isAdult: false, type: ANIME, sort: $sort) {
      ...media
    }
  }
  leftovers: Page(page: $page) {
    pageInfo {
      hasNextPage
      total
    }
    media(season: $previousSeason, seasonYear: $previousYear, format: $format, format_not: $excludeFormat, status: $status, episodes_greater: 16, isAdult: false, type: ANIME, sort: $sort) {
      ...media
    }
  }
}

fragment media on Media {
  id
  idMal
  title {
    romaji
    native
    english
  }
  startDate {
    year
    month
    day
  }
  endDate {
    year
    month
    day
  }
  status
  season
  format
  genres
  synonyms
  duration
  popularity
  episodes
  source(version: 2)
  countryOfOrigin
  hashtag
  averageScore
  meanScore
  siteUrl
  description
  bannerImage
  isAdult
  coverImage {
    extraLarge
    color
  }
  trailer {
    id
    site
    thumbnail
  }
  externalLinks {
    site
    url
  }
  rankings {
    rank
    type
    season
    allTime
  }
  studios(isMain: true) {
    nodes {
      id
      name
      siteUrl
    }
  }
  relations {
    edges {
      relationType(version: 2)
      node {
        id
        title {
          romaji
          native
          english
        }
        siteUrl
      }
    }
  }
  airingSchedule(notYetAired: true, perPage: 2) {
    nodes {
      episode
      airingAt
    }
  }
}
`;

export default query;
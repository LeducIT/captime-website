import type { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

export const basicHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

export const sendRes = (data: any = { status: 'ok' }, statusCode = 200) => ({
  statusCode,
  headers: basicHeaders,
  body: JSON.stringify(data),
})

interface Athlete {
  height: string
  rank: string
  overallScore: string
  scores: Api.Score[]
  link: string
  countryOfOriginName: string
  countryImage: string
  weight: string
  profilePic: string
  gender: string
  age: number
  name: string
  competitorName: string
}

declare namespace Api {

  export interface Pagination {
    totalPages: number
    currentPage: number
    totalCompetitors: number
  }

  export interface Competition {
    fittestIn: number
    division: number
    regional: number
    profession: number
    inSubCat: number
    scaled: number
    competitonid: number
    year: string
    age_group: string
    weight_group: string
    competitionType: string
  }

  export interface Ui {
    countryChampion: boolean
    highlight: boolean
    drawBlueHR: boolean
  }

  export interface Entrant {
    countryCode?: any
    regionId: string
    profession: number
    height: string
    affiliateId: number
    divisionId: string
    regionName: string
    countryOfOriginName: string
    weight: string
    affiliateName: string
    regionCode: string
    status: string
    regionalCode: string
    bibId: string
    profilePicS3key: string
    teamCaptain: number
    competitorId: number
    firstName: string
    gender: string
    age: number
    lastName: string
    countryOfOriginCode: string
    competitorName: string
  }

  export interface Score {
    ordinal: number
    breakdown: string
    lane: number
    scoreIdentifier: string
    exists: boolean
    workoutresult: string
    mobileScoreDisplay: string
    rank: string
    heat: number
    points: any
    scoreDisplay: string
    location: string
    time: string
    judge: string
    workoutrank: string
  }

  export interface LeaderboardRow {
    overallScore: string
    overallRank: string
    ui: Ui
    entrant: Entrant
    scores: Score[]
    cf_rank_order: string
  }

  export interface Ordinal {
    ordinal: number
    order_column: string
    details_column: string
    columnName: string
    ordinal_exists: boolean
    lane_column: string
    heat_column: string
    results_column: string
    ui_column: string
  }

  export interface RootObject {
    sort: number
    pagination: Pagination
    cachekey: string
    dataType: string
    competition: Competition
    leaderboardRows: LeaderboardRow[]
    version: number
    ordinals: Ordinal[]
    totalPages: string
    currentPage: string
    cacheKey: string
    LB_Key: string
  }

}

export const handler: Handler = async(event) => {
  if (event.httpMethod === 'OPTIONS')
    return sendRes()
  const body = event.queryStringParameters as any
  const limit = body.limit || 5
  const skip = body.skip || 0
  const topList: Athlete[] = []
  // const gameUrl = 'https://games.crossfit.com/competitions/api/v1/competitions/games/2020/leaderboards?division=1&sort=0'
  const openUrl = 'https://c3po.crossfit.com/api/competitions/v2/competitions/open/2022/leaderboards?view=0&division=1&region=0&scaled=0&sort=0'
  const res = await fetch(openUrl)
  const topListRaw: Api.RootObject = await res.json() as Api.RootObject
  const cutted = topListRaw.leaderboardRows.slice(skip, skip + limit)
  cutted.forEach((row) => {
    topList.push({
      rank: row.overallRank,
      overallScore: row.overallScore,
      scores: row.scores,
      link: `https://games.crossfit.com/athlete/${row.entrant.competitorId}`,
      height: row.entrant.height,
      countryOfOriginName: row.entrant.countryOfOriginName,
      countryImage: `https://assets.crossfit.com/build/img/sites/games/country-flags/${row.entrant.countryOfOriginCode.toLocaleLowerCase()}.svg`,
      weight: row.entrant.weight,
      profilePic: `https://profilepicsbucket.crossfit.com/${row.entrant.profilePicS3key}`,
      gender: row.entrant.gender,
      age: row.entrant.age,
      name: `${row.entrant.firstName} ${row.entrant.lastName}`,
      competitorName: row.entrant.competitorName,
    })
  })

  return sendRes(topList)
}

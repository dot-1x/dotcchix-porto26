/**
 * Represents the detailed information of characters showcased on the player's profile.
 */
export interface ShowAvatarInfo {
  avatarId: number
  level: number
  costumeId?: number // Optional as not all avatars have alternative costumes equipped
  talentLevel?: number // Optional as it may not be present for all showcases
  energyType: number
}

/**
 * Represents the player's profile picture reference ID.
 */
export interface ProfilePicture {
  id: number
}

/**
 * Represents the core in-game player profile details.
 */
export interface EnkaPlayerInfo {
  nickname: string
  level: number
  signature: string
  worldLevel: number
  nameCardId: number
  finishAchievementNum: number
  towerFloorIndex: number // Spiral Abyss deepest floor cleared
  towerLevelIndex: number // Spiral Abyss deepest chamber cleared
  showAvatarInfoList: ShowAvatarInfo[]
  showNameCardIdList: number[]
  profilePicture: ProfilePicture
  theaterActIndex: number // Imaginarium Theater act progress
  theaterModeIndex: number // Imaginarium Theater mode reference
  theaterStarIndex: number // Imaginarium Theater star count
  isShowAvatarTalent: boolean
  fetterCount: number // Total max friendship level count
  towerStarIndex: number // Spiral Abyss star count
  stygianIndex: number // 5/6 - 5: Fearless, 6: Dire
  stygianSeconds: number
  stygianId: number
}

/**
 * Represents the owner's profile info on the hosting platform (e.g., Enka.network).
 */
export interface UserProfile {
  bio: string
  level: number
  avatar: string // URL path to the avatar image
}

/**
 * Represents the platform account details of the profile owner.
 */
export interface Owner {
  hash: string
  id: number
  profile: UserProfile
  username: string
}

/**
 * Represents the complete API response payload for the player profile data.
 */
export interface PlayerDataResponse {
  playerInfo: EnkaPlayerInfo
  ttl: number // Time to live (cache duration)
  uid: string
  owner: Owner
  region: "ASIA" | "GLOBAL" | "EU" | "NA" | string // Keeps flexibility while mapping common regions
}

export async function getEnkaPlayerInfo(
  UID: string,
): Promise<EnkaPlayerInfo | null> {
  try {
    const res = await fetch(`https://enka.network/api/uid/${UID}/?info`, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "dotcchix-porto" },
    })
    if (!res.ok) return null
    const data: PlayerDataResponse = await res.json()
    return data.playerInfo ?? null
  } catch {
    return null
  }
}

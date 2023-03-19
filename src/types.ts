//INTERFACES
interface MatchInfo {
  sport: string;
  participant1?: string;
  participant2?: string;
  score?: ScoreType;
}

interface MatchResult {
  name: string;
  score: string;
}

interface MappingRulesForSports {
  [key: string]: {
    jointType: Joint;
    scoreType: ScoreFormat;
  };
}

//TYPES
type ScoreType = string | string[][];

//ENUMS
enum Sport {
  SOCCER = 'soccer',
  VOLLEYBALL = 'volleyball',
  HANDBALL = 'handball',
  BASKETBALL = 'basketball',
  TENNIS = 'tennis',
}

enum Joint {
  DASH = ' - ',
  VERSUS = ' vs ',
}

enum ScoreFormat {
  CLASSIC_SCORE = 'SCORE',
  ARRAY_SCORE = 'ARRAY',
  SETS_SCORE = 'SETS',
}

export {
  MatchInfo,
  MatchResult,
  Sport,
  Joint,
  ScoreFormat,
  MappingRulesForSports,
};

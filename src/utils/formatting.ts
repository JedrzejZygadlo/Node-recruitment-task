import { Joint, ScoreFormat, MappingRulesForSports } from '../types';

export const mappingRulesForSports: MappingRulesForSports = {
  soccer: { jointType: Joint.DASH, scoreType: ScoreFormat.CLASSIC_SCORE },
  volleyball: { jointType: Joint.DASH, scoreType: ScoreFormat.SETS_SCORE },
  handball: { jointType: Joint.VERSUS, scoreType: ScoreFormat.CLASSIC_SCORE },
  basketball: { jointType: Joint.DASH, scoreType: ScoreFormat.ARRAY_SCORE },
  tennis: { jointType: Joint.VERSUS, scoreType: ScoreFormat.SETS_SCORE },
};

export const mapSetsScore = (score: string): string => {
  const scores = score.split(',');
  const mainScore = scores.shift();
  const setsScore = scores
    .map((score, index) => `set${index + 1} ${score}`)
    .join(', ');
  return `Main score: ${mainScore} (${setsScore})`;
};

export const mapArrayScore = (score: string[][]): string => {
  return score.flat().join(',');
};

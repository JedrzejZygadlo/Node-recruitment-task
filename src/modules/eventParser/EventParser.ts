import { MatchInfo, ScoreFormat } from '../../types';
import {
  mapSetsScore,
  mapArrayScore,
  mappingRulesForSports,
} from '../../utils/formatting';

export class EventParser {
  static makeEventName(match: MatchInfo): string {
    const { jointType } = mappingRulesForSports[match.sport];
    return match.participant1 + jointType + match.participant2;
  }

  static formatScore(match: MatchInfo): string {
    const { scoreType } = mappingRulesForSports[match.sport];
    const { score } = match;
    switch (scoreType) {
      case ScoreFormat.SETS_SCORE:
        return mapSetsScore(score as string);
      case ScoreFormat.ARRAY_SCORE:
        return mapArrayScore(score as string[][]);
      default:
        return match.score as string;
    }
  }
}

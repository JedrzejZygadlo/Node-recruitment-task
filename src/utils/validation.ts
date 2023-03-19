import { MatchInfo, Sport } from '../types';

export const validMatches = (matches: MatchInfo[]): Required<MatchInfo[]> => {
  return matches.filter((match) => {
    const { sport, participant1, participant2, score } = match;
    return (
      (Object.values(Sport) as string[]).indexOf(sport) !== -1 &&
      participant1 &&
      participant2 &&
      score
    );
  });
};

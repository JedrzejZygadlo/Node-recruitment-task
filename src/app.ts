import { matches } from './data';
import { validMatches } from './utils/validation';
import { makeEventName, formatScore } from './modules/eventParser';
import { MatchInfo, MatchResult } from './types';

const validatedMatches = validMatches(matches);

const finalResults = validatedMatches.map((match: MatchInfo): MatchResult => {
  return { name: makeEventName(match), score: formatScore(match) };
});

console.log(finalResults);

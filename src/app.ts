import { matches } from './data';
import { validMatches } from './utils/validation';
import { makeEventName, formatScore } from './modules/eventParser';

const validatedMatches = validMatches(matches);

const finalResults = validatedMatches.map((match) => {
  return { name: makeEventName(match), score: formatScore(match) };
});

console.log(finalResults);

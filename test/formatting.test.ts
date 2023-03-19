import { mapSetsScore, mapArrayScore } from '../src/utils/formatting';

describe('mapSetsScore', () => {
  it('Check if method responsible for map score to score with sets format works correctly. ', () => {
    const score = '2:1,6:1,6:7,6:4';
    const expectedScore = 'Main score: 2:1 (set1 6:1, set2 6:7, set3 6:4)';
    const mappedScore = mapSetsScore(score);
    expect(mappedScore).toEqual(expectedScore);
  });
});

describe('mapArrayScore', () => {
  it('Check if method responsible for map score from arrays works correctly. ', () => {
    const score: string[][] = [
      ['14:14', '12:16'],
      ['22:21', '24:25'],
    ];
    const expectedScore = '14:14,12:16,22:21,24:25';
    const mappedScore = mapArrayScore(score);
    expect(mappedScore).toEqual(expectedScore);
  });
});

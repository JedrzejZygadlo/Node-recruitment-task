import { makeEventName, formatScore } from '../src/modules/eventParser';
import { MatchInfo, Sport } from '../src/types';

describe('makeEventName', () => {
  it('Check if correct name of sport event is returned. Name with dash ("-") case: ', () => {
    const testMatch: MatchInfo = {
      sport: Sport.SOCCER,
      participant1: 'FC Barcelona',
      participant2: 'Real Madryt',
      score: '2:1',
    };
    const expectedName = 'FC Barcelona - Real Madryt';
    const mappedEventName = makeEventName(testMatch);
    expect(mappedEventName).toEqual(expectedName);
  });

  it('Check if correct name of sport event is returned. Name with versus ("vs") case:', () => {
    const testMatch: MatchInfo = {
      sport: Sport.TENNIS,
      participant1: 'Rafael Nadal',
      participant2: 'Novak Djokovic',
      score: '2:3,1:6,6:3,6:7,6:4,4:6',
    };
    const expectedName = 'Rafael Nadal vs Novak Djokovic';
    const mappedEventName = makeEventName(testMatch);
    expect(mappedEventName).toEqual(expectedName);
  });
});

describe('formatScore', () => {
  it('Check if score of event is returned in the correct format. Normal (default) score format case:', () => {
    const testMatch: MatchInfo = {
      sport: Sport.SOCCER,
      participant1: 'FC Barcelona',
      participant2: 'Real Madryt',
      score: '2:1',
    };
    const expectedScore = '2:1';
    const mappedScore = formatScore(testMatch);
    expect(mappedScore).toEqual(expectedScore);
  });

  it('Check if score of event is returned in the correct format. Score format from Array case:', () => {
    const testMatch: MatchInfo = {
      sport: Sport.BASKETBALL,
      participant1: 'Zastal Zielona Góra',
      participant2: 'Śląsk Wrocław',
      score: [
        ['20:15', '14:18'],
        ['12:21', '22:25'],
      ],
    };
    const expectedScore = '20:15,14:18,12:21,22:25';
    const mappedScore = formatScore(testMatch);
    expect(mappedScore).toEqual(expectedScore);
  });

  it('Check if score of event is returned in the correct format. Score format with sets case:', () => {
    const testMatch: MatchInfo = {
      sport: Sport.VOLLEYBALL,
      participant1: 'Skra Bełchatów',
      participant2: 'Jastrzębski Węgiel',
      score: '1:3,19:25,25:20,23:25,17:25',
    };
    const expectedScore =
      'Main score: 1:3 (set1 19:25, set2 25:20, set3 23:25, set4 17:25)';
    const mappedScore = formatScore(testMatch);
    expect(mappedScore).toEqual(expectedScore);
  });
});

import { MatchInfo, Sport } from '../src/types';
import { validMatches } from '../src/utils/validation';

describe('validMatches', () => {
  it('Check if method works properly in case when all matches have correct format.', () => {
    const matches: MatchInfo[] = [
      {
        sport: Sport.SOCCER,
        participant1: 'FC Barcelona',
        participant2: 'Real Madryt',
        score: '2:1',
      },
      {
        sport: Sport.TENNIS,
        participant1: 'Rafael Nadal',
        participant2: 'Novak Djokovic',
        score: '2:3,1:6,6:3,6:7,6:4,4:6',
      },
      {
        sport: Sport.BASKETBALL,
        participant1: 'Zastal Zielona Góra',
        participant2: 'Śląsk Wrocław',
        score: [
          ['20:15', '14:18'],
          ['12:21', '22:25'],
        ],
      },
    ];
    const validatedMatches = validMatches(matches);
    expect(validatedMatches.length).toEqual(3);
  });
  it('Check case when there is match with unexpected sport name. This match should be filter out. ', () => {
    const matches: MatchInfo[] = [
      {
        sport: Sport.SOCCER,
        participant1: 'Chelsea FC',
        participant2: 'Liverpool',
        score: '2:2',
      },
      {
        sport: Sport.TENNIS,
        participant1: 'Iga Świątek',
        participant2: 'Aryna Sabalenka',
        score: '2:0,6:1,6:2',
      },
      {
        sport: 'hockey',
        participant1: 'GKS Katowice',
        participant2: 'Cracovia',
        score: '4:5',
      },
    ];
    const validatedMatches = validMatches(matches);
    expect(validatedMatches.length).toEqual(2);
  });
  it('Check case when there is match without required data. This match should be filter out. ', () => {
    const matches: MatchInfo[] = [
      {
        sport: Sport.SOCCER,
        participant1: 'Inter Mediolan',
        participant2: 'Juventus',
        score: '3:2',
      },
      {
        sport: Sport.VOLLEYBALL,
        participant1: 'Czarni Radom',
        participant2: 'Kędzierzyn-Koźle',
        score: '1:3,15:25,20:25,25:21,21:25',
      },
      {
        sport: Sport.SOCCER,
        participant1: '',
        participant2: '',
        score: '4:5',
      },
    ];
    const validatedMatches = validMatches(matches);
    expect(validatedMatches.length).toEqual(2);
  });
});

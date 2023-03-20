import { matches } from './data';
import { validMatches } from './utils/validation';
import { makeEventName, formatScore } from './modules/eventParser';
import mongoose, { ConnectOptions } from 'mongoose';
import config from 'config';
import Match from './models/Match';

const db = config.get('mongoURI');

async function connectToDatabase(): Promise<void> {
  await mongoose.connect(
    db as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  );
}

export async function getMatchesResultsFromDatabase(): Promise<void> {
  const matchesFromDatabase = await Match.find();
  const finalResults = matchesFromDatabase.map((match) => {
    return { name: makeEventName(match), score: formatScore(match) };
  });
  console.log('Result matches', finalResults);
}

async function saveMatchesToDatabase(): Promise<void> {
  const validatedMatches = validMatches(matches);
  for (const match of validatedMatches) {
    await new Match(match).save();
  }
}

async function makeOperationOnDatabase(): Promise<void> {
  await connectToDatabase();
  await getMatchesResultsFromDatabase().catch((err) => console.log(err));
  mongoose.connection.close();
}

makeOperationOnDatabase();

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Match = new Schema({
  sport: {
    type: String,
    required: true,
  },
  participant1: {
    type: String,
    required: true,
  },
  participant2: {
    type: String,
    required: true,
  },
  score: {
    type: Schema.Types.Mixed,
    required: true,
  },
});
export default mongoose.model('matches', Match);

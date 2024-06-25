// This schema could be used to record any notable behaviors or temperaments displayed by the horse, which could be useful for tracking changes over time or in response to dietary or exercise adjustments.

//needs to be exported


const behaviorSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  behavior: String,
  trigger: String,
  notes: String,
});

//If users need to keep track of equipment used for each horse (e.g., saddles, bridles), an equipment schema might include details about the equipment type, condition, and specific adjustments for the horse.

//needs to be exported

const equipmentSchema = new mongoose.Schema({
  itemType: { type: String, required: true },
  brand: String,
  model: String,
  condition: String,
  fit: String, // e.g., adjustments specific to the horse
  notes: String,
});

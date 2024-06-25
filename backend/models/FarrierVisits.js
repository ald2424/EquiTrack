//Tracking farrier visits and care can be crucial for horse health. This schema can record details about shoeing and hoof care.

//needs to be exported

const farrierVisitSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  serviceProvided: String, // e.g., Shoeing, Trimming
  notes: String,
});

//While you have a MedicalDates schema, you might want to have a more detailed schema specifically for vaccinations, detailing the type of vaccine, date administered, and when the next dose is due.

//needs to be exported

const vaccinationSchema = new mongoose.Schema({
  vaccineType: String,
  dateAdministered: Date,
  nextDueDate: Date,
  notes: String,
});

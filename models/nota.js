import mongoose from "mongoose";
const { models, Schema } = mongoose;

const notaSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Nota = models.Nota || mongoose.model("Nota", notaSchema);
export default Nota;

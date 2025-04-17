import mongoose from "mongoose";
const { Schema, models } = mongoose;

const clienteSchema = new Schema(
  {
    NIT: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    tipo_cliente: {
      type: String,
      required: true,
    },
    responsable: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Cliente = models.Cliente || mongoose.model("Cliente", clienteSchema);
export default Cliente;

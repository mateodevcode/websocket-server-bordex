import mongoose from "mongoose";
const { models, Schema } = mongoose;

const ordenProduccionSchema = new Schema(
  {
    ID_cliente: {
      type: String,
      required: true,
    },
    remision: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    referencia: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    valor_unitario: {
      type: Number,
      required: true,
    },
    estado: {
      type: String,
      required: true,
      default: "pendiente",
    },
    track: {
      type: String,
      required: true,
    },
    linkqr: {
      type: String,
      required: true,
    },
    tipo_producto: {
      type: String,
      required: true,
    },
    productos: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const OrdenProduccion =
  models.OrdenProduccion ||
  mongoose.model("OrdenProduccion", ordenProduccionSchema);
export default OrdenProduccion;

import mongoose from "mongoose";
const { models, Schema } = mongoose;

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    cedula: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cargo: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    procesos: {
      type: Array,
      required: false,
      default: [],
    },
    bloqueado: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;

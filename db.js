import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connections[0].readyState) return; // Ya está conectado

  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@bordex.eun0u.mongodb.net/?retryWrites=true&w=majority&appName=Bordex`
    );
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB", error);
  }
};

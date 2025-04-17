import Cliente from "../models/cliente.js";

export const cliente_socket = (io) => {
  io.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id);

    socket.on("client:getclientes", async () => {
      const clientes = await Cliente.find();
      socket.emit("server:clientes", clientes); // Solo a ese cliente
    });
  });
};

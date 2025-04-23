import { cliente_socket } from "./cliente_socket.js";
import { nota_socket } from "./nota_socket.js";
import { orden_produccion_socket } from "./orden_produccion_socket.js";
import { usuario_socket } from "./usuario_socket.js";

export const Socket = (io) => {
  // Notas de Prueba
  nota_socket(io);
  // Ordenes de Produccion
  orden_produccion_socket(io);
  // Clientes
  cliente_socket(io);
  // Usuarios
  usuario_socket(io);
};

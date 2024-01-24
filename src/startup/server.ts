import { Server } from "http";

export default (server: Server) => {
  server.listen(3000, () =>
    console.log(`Server started on port : 3000`)
  );
};

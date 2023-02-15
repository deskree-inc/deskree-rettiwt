import createClient from "@deskree/deskree-js";
import axios from "axios";

const options = {
  projectId: process.env.VITE_APP_DESKREE_PROJECT_ID as string,
  axios: axios,
  adminToken: process.env.VITE_APP_DESKREE_ADMIN_TOKEN as string,
};

const client = createClient(options);

client.config().generateDataTypes({ path: "./src/interfaces/" });

import createClient from "@deskree/deskree-js";
import axios from "axios";

const deskree = createClient({
  projectId: import.meta.env.VITE_APP_DESKREE_PROJECT_ID as string,
  axios: axios,
});

console.log(import.meta.env.VITE_APP_DESKREE_PROJECT_ID);

export { deskree };

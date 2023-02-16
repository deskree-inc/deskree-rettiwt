import createClient from "@deskree/deskree-js";
import axios from "axios";

const options: any = {
  projectId: import.meta.env.VITE_APP_DESKREE_PROJECT_ID as string,
  axios: axios,
};
const deskree = createClient(options);

export { deskree, options };

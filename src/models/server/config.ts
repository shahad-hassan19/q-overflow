import env from "@/app/env";
import { Client, Users, Avatars, Databases, Storage } from "node-appwrite";

const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey);



    const databases = new Databases(client);
    const users = new Users(client);
    const avatars = new Avatars(client);
    const storage = new Storage(client);

    export { client, databases, users, avatars, storage }
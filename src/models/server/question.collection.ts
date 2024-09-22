import { Permission } from  "node-appwrite";

import { db, questionCollection } from "@/models/name"
import { databases } from "./config";

export default async function createQuestionCollection(){
    // Create collection
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("delete"),
    ])

    console.log("Question Collection is created.")

    // Creating attributes and Indexes
    
}
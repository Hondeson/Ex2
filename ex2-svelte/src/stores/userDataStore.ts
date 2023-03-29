import { writable } from "svelte/store";
import type { User } from "../types/User";

const userStore = writable(getDataFromDatabase());

function getDataFromDatabase(): User[] {
    const arr = [];

    let id = 1;
    for (let i = 0; i < 10; i++) {
        arr.push({
            id: id,
            firstName: "name" + id,
            lastName: "lastname" + id,
            email: "email" + id,
            company: {
                name: "company" + id,
                country: "country" + id
            },
            avatar: "",
        });
        id++;
    }
    
    return arr;
}

export { userStore }
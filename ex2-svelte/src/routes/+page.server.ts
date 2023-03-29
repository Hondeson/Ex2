import { error } from '@sveltejs/kit';

export const load = () => {
    const data = getDataFromDatabase();
    return { userArray: data }
};

const getDataFromDatabase = () => {
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
interface User {
    name: string ,
    surname: string,
    age: number
}

interface Customer {
    user: User;
    bill: number;
}

const customer: Customer = {
    user: {
        name: 'Firdavs',
        surname: 'Eminov',
        age: 12
    },
    bill: 132
}
//  const person: {
//      name: string;
//      age: number;
//      hobbies: string[];
//      role: [number, string];
//  } = {
//      name: "Sri",
//      age: 33,
//      hobbies: ['Sports', 'Cooking'],
//      role: [2, 'author']
//  }

//  person.role.push('admin');
//  person.role[1] = 'sert'

enum Role {
    ADMIN,
    READONLYUSER,
    AUTHOR
};

const person = {
    name: "Sri",
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READONLYUSER
}
 console.log(person);



 let favouriteActivities: string[];
favouriteActivities = ["One", "Two"]

favouriteActivities.forEach(element => {
    console.log(element);
});

for(const hobby of person.hobbies)
{
    console.log(hobby);
}

if(person.role === Role.ADMIN)
{
    console.log('is admin');
}
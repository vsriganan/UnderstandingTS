"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLYUSER"] = 1] = "READONLYUSER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Sri",
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READONLYUSER
};
console.log(person);
var favouriteActivities;
favouriteActivities = ["One", "Two"];
favouriteActivities.forEach(function (element) {
    console.log(element);
});
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
//# sourceMappingURL=objs-arrays-enums.js.map
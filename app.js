const users = [{
    id: 1,
    name: 'Yuriy',
    schoolId: 101,
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 888,
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade:86,
}, {
    id: 2,
    schoolId: 888,
    grade: 100,
}, {
    id: 3,
    schoolId: 101,
    grade: 80,
}];


const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
    
        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

//Yuriy has a 83% in the class
const getStatus = (userId) => {
    return getUser(userId).then((tempUser) => {
        const user = tempUser;
        return getGrades(tempUser.schoolId).then((grades) => {
            let average = 0;
            if (grades.length > 0) {
                average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
            }

            return `${user.name} has a ${average} in the class`;
        });
    })
};

getStatus(1).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});


//async/await
getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);

    let average = 0;
    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average} in the class`;
};

getStatusAlt(1).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});

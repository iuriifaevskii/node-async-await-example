//async await. Two same functions

const getTestFirst = () => {
    return new Promise((resolve, reject) => {
        //resolve('Yuriy');
        reject('This is an error');
    });
};

const getTestSecond = async () => {
    throw new Error('This is an error');
    return 'Yuriy';
};


getTestFirst()
    .then(name => console.log(name))
    .catch(e => console.log(e));

getTestSecond()
    .then(name => console.log(name))
    .catch(e => console.log(e));
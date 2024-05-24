function greet(username, callback){
    console.log(`Hello there ${username}`);
    callback();
};

function intro(){
    console.log(`This is me`);
};

greet('Hellen', intro);

setTimeout(intro, 2000);

const interval = () => {
    console.log('Excuse me');
}
setInterval(interval, 3000);
const internship = false;
const ourpromise = new Promise((resolve, reject) => {
    if(internship){
        resolve('I made it');
    }else{
        reject('Pray for me')
    }
});
ourpromise.then(() =>{
    console.log('I will be confirmed');
})
.catch(() =>{
    console.log('I will continue applying for jobs');
})
.finally(() =>{
    console.log('I will still be successful')
});

// console.log({ourpromise});

const successWish = async () =>{
    try{await ourpromise;
        console.log('My successful wish');
    }catch{
        console.log('My wish is not successful');
    } 
}
successWish();

function greeting(){
    console.log('Hello');
}
greeting();
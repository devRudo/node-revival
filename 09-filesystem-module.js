//Synchronous read write
const {readFileSync, writeFileSync} = require('fs')

console.log('do this first')
const first = readFileSync('./data/filesystem/sample.txt', 'utf8')
const second = readFileSync('./data/filesystem/sample1.txt', 'utf8')

// console.log(first)
// console.log(second)

writeFileSync('./data/filesystem/write-to-file.txt', `Writing to file${first}, ${second}\n`, {
    flag: 'a',
})
console.log('Thank you for your patience. here is your result')

console.log('Go f**k with your patience. Why did you keep me waiting. You could have done it asynchronously. You dumbo!')

// Asynchronous Read Write 

const{readFile, writeFile} =require('fs')

readFile('./data/filesystem/sample.txt', 'utf-8' , (err, res)=>{
    if(err){
        console.log(err)
        return;
    }
    else {
        const first = res
        console.log(res)
        readFile('./data/filesystem/sample1.txt', 'utf-8', (err, res)=>{
            if(err){
                console.log(err)
                return;
            }
            else {
                const second = res
                writeFile('./data/filesystem/write-to-file-async.txt', `Writing to file ${first}, ${second}\n`, {
                    flag: 'a'
                }, (err)=>{
                    if(err){
                        console.log('Error writing to file')
                    }
                    else{
                    console.log('write to file done')
                    }
                
                })
            }
        })
    }
})

// Alternate async await way
const{readFile, writeFile} = require('fs').promises

console.log('do this first');

const writeFileAsync = async () => {
    let first = ''
    let second = ''
    try{
    first = await readFile('./data/filesystem/sample.txt', 'utf-8');
    }
    catch(e){
        console.log(e);
    }
    try{
         second = await readFile('./data/filesystem/sample1.txt', 'utf-8');
        }
        catch(e){
            console.log(e);
        }
        console.log(first)
        console.log(second)
        const writingFile = await writeFile('./data/filesystem/write-to-file-async-await.txt', `Writing to file ${first}, ${second}\n`, {
            flag:'a'
        })
        console.log('thankyou for being patient. Here is you result')
}

console.log('I know you are working hard. but i can not wait for you. Please do it now.');

writeFileAsync()
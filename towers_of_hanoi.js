/* const TowerOfHanoi = [1,2,3,4] //represents intial tower
let c1 = TowerOfHanoi //column 1
let c2 = [] //column 2
let c3 = [] //column 3
function mover(c1,c2,c3){
    if(c3===TowerOfHanoi){ //if tower is sorted then break and return sorted
        return console.log('tower has been shift:\n'+c1+'\n'+c2+'\n'+c3)
    }else{} //if not then lets get to work
    c2.push(c1[0]) //move first disk to second column
    c1.shift(c2.length)//remove that disk from the original
    c3.push(c1[0])//move second disk to third column
    c1.shift(c3.length)//remove taht disk from the orginal
    console.log('column 1: ' +c1)
    console.log('column 2: ' +c2)
    console.log('column 3: ' +c3)
    //return mover(c1,c2,c3)
    
}
mover(c1,c2,c3)
 */

function hanoi(ndisk,start,destination,auxilary){
    if (ndisk>0){
        hanoi(ndisk-1,start,destination,auxilary)
        console.log("move top disk from peg " + start + ' to peg ' + destination)    
        hanoi(ndisk-1,start,destination,auxilary)
    }
}
let n = 3
hanoi(n,'A','B','C')
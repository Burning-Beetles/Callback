

function hello(a,b){ // b = ()=>square(10)
    a()
    b()
}



const hii = ()=>{
    console.log('I am watching youtube')
}


const square = (a) => {
    console.log(a*a)
}


hello(hii , ()=>square(10))

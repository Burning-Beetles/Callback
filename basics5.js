
function hello(fun1){ // fun1 = ()=> sum(10,20)
    fun1()
}



let sum = (a,b) => {
    console.log(a,b)
}

// sum(10,20)

hello(()=> sum(10,20)) // sum(10,20) = undefined 


// hello(
//     function(){
//       sum(10,20)
//     }
// )

// fun1 = () => sum(10,20) 

// function fun1(){
//     sum(10,20)
// }


// fun1()
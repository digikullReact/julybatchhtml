

const pizashop="Dominos";



function SupertechApartment(){

let park="Supertech park";



  function towera(){
   let lift="lift";


    function fla101(){
      let cookedFood="Paneer dish";
      //Abhishek 
       console.log(cookedFood); // ????
        console.log(pizzashop);  //for you global
       console.log(lift); //for you its global
      
      
    }

     function fla102(){
       //Rajkumar -->
       console.log(pizzashop);  //for you global
       console.log(lift); //for you its global
      // console.log(cookedFood); // ????
       
      
    }


    
  }
}


function Firozabad(){
let placeVisit="jain temple";


  function sindhicolony(){


    function housenumber14(){

      console.log(placeVisit)

  console.log(money);

      
    }

       function housenumber13(){
         let name="Ram kushwaha";
         let money="1000000";
            

      
    }


    
  }


  
}


///

let k=9;
//var becomes the part of global object (window),but let and const 
///RK
function foo(){
  /// ---RK---

  let lift=99;  //  --->-->
  function bar(){
    console.log(j);

    function gh(){
      console.log(j) ;// 
          console.log(k) ;// 
    }
    
  }


  console.log(k); //
}
console.log(j);


//function Runtime(jscode){

  
  function Js_engine(jscode){


  function interpreter(){
    
  }
    function compiler(){
    
  }

  function parser(){
    
  }

let parsedCode=  parser(jscode); 
let interpreted_bytecode=interpreter(parsedCode);

 let machinecode= compiler(interpreted_bytecode);

  return machinecode
}

return Js_engine(jscode)


  
}

 const mc=Runtime("JS code---"); // gets called
// machine code -->Runs o

//--->lexical scope
function df(hj){
let j=9;
//---->lexical scope
///
  ///---------

  return function kl(){
    console.log(j);
    // local scope of kl --->
    
  }
}
df(2)();


//------lexicals cope
let u=99;
function fb(cb){
////---------------
  cb(y,h);
  ///----->
for(let i=0;i<7;i++){
  let h=9;
}
  
}


fb(function(data){
  console.log(data);
})


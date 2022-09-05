//callback hell

getElectricalBill(function(elctricbill){
  getTheAdreesProof(function(elctricbill,addressproof){
  getBirthCertificate(addressproof,function(birthcertificate){

    //---
    getAdharCard(birthcertificate,function(adharCard){

      /// ---->

      getPassport(adharCard,function(passport){
        console.log(passport);
        
      })
      
    })
    
  })

  
  
})
  
  
})

///-------

//hidden
function getAdharAndNames(cb){

  setTimeout(()=>{
    let data=[{
  name:"Rajkumar",
  adhar:101
},
          {
  name:"Sweta",
  adhar:102
},
          {
  name:"Girish",
  adhar:103
},
          {
  name:"Pranjali",
  adhar:104
}
         
         
         ]

    cb(data)
 
    
  },2000)
 
  
}

// hidden

function checkVaccinationStatus(adharId,cb){

  setTimeout(()=>{
   let statusOfAdhar=false;
    //
    let status=[
      {
        adhar:101,
        vaccinated:true
      },
      {
        adhar:102,
        vaccinated:false
      },
      {
        adhar:103,
        vaccinated:true
      },
      {
        adhar:104,
        vaccinated:false
      }
    ]

for(let i=0;i<status.length;i++){
  if(status[i].adhar==adharId)
  {
    statusOfAdhar=status[i].vaccinated
  }


}
      cb(statusOfAdhar);
    
  },4000)

  
}

// Find out the status of Girish --->

//checkVaccinationStatus(adharID,cb)

//getAdharAndNames(cb);
//Girish
 getAdharAndNames(function(data2) {
  
   let adharId=0;


   for(let i=0;i<data2.length;i++){
     if(data2[i].name=="Girish"){
       adharId=data2[i].adhar
       
     }

     
   }
   
checkVaccinationStatus(adharId,function(status){
  console.log(status);
});


})

//you have to write an async function that returns you the certificate based on your vaccination status and your adharId


//getCertificate(adharId,cb);

// [{adharId:90900,certificate:"You are vaccinated on this day"},{adharID:90988,certificate:"Not vaccinated






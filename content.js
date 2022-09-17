

var currentDomain = document.location.href;

var localKeys;


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    
    localKeys = response;
    arr = [];
    currentValue = document.querySelector('[aria-label="Search"]').value
    var gooBars = document.querySelector('[aria-label="Search"]');
    var cloneGS = gooBars.cloneNode(true)


   // console.log(localKeys)

   Object.entries(localKeys).forEach((item, index) => {
       


        if(Object.values(item)[0].indexOf("keyDB") > -1 && currentDomain.indexOf('google.com')> -1){
          //console.log(item[1])   
            var stringKeys = " -" + item[1];
            arr.push(" -" + item[1])
          
            //console.log(arr.toString())


            // var gooBars = document.querySelector('[aria-label="Search"]');

           // currentValue = document.querySelector('[aria-label="Search"]').value

           // let cloneGS = gooBars.cloneNode(true)

            //changing appearance

            gooBars.after(cloneGS)
            cloneGS.id = "cloneInput";
            gooBars.style.zIndex = "";
            cloneGS.style.color = "black";
            cloneGS.style.zIndex = "10";
            cloneGS.style.position = "absolute";
            gooBars.style.color = "white" 

            //end
            

            arr.forEach(function(i, index){
                if(index === arr.length - 1){ 
                    console.log(i.toString())
                    gooBars.value += i.toString(); 
                    

                }
            })
            
           
        
        }
        cloneGS.value = currentValue;


    })   

})



//   if(currentDomain.indexOf('yahoo.com')> -1){
//     console.log('yahoo.com')
//    var yahooSearchBar = document.querySelector('[role="combobox"]').value;
//    console.log(yahooSearchBar)

// }

// if(currentDomain.indexOf('bing.com')> -1){
//     console.log('bing.com')
//    var bingSearchBar = document.querySelector('[type="search"]').value;
//    console.log(bingSearchBar)

// }

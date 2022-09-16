

var currentDomain = document.location.href;

var localKeys;


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    
    localKeys = response;
    arr = [];
    
   // console.log(localKeys)

   Object.entries(localKeys).forEach((item, index) => {


        if(Object.values(item)[0].indexOf("keyDB") > -1 && currentDomain.indexOf('google.com')> -1){
          //console.log(item[1]) 
          var stringKeys = " -" + item[1];
            arr.push(" -" + item[1])
          
            console.log(arr.toString())

            var stringValue = arr.toString();


            var googleSearchBarCurrentValue = document.querySelector('[aria-label="Search"]');

            
            // expected output: Array ["T", "I"
            

            arr.forEach(function(i, index){
                if(index === arr.length - 1){ 
                    console.log(i.toString())
                    googleSearchBarCurrentValue.value += i.toString(); 
                }
            })


            //          // console.log(googleSearchBarCurrentValue.value)

                      
                    
            //          // googleSearchBarCurrentValue.setAttribute("values",arr[i])  //arr[i]


            //         //  console.log('yahoo.com')
            //         var googleSearchBarValue = document.querySelector('[aria-label="Search"]');

                    
            //        //console.log(googleSearchBarValue.value)
                    
      
            //         //   var googleSearchBarCurrentValue = document.querySelector('[aria-label="Search"]');

            //         //   console.log(googleSearchBarCurrentValue.value)
    

        
        }
        

    })    

})



  if(currentDomain.indexOf('yahoo.com')> -1){
    console.log('yahoo.com')
   var yahooSearchBar = document.querySelector('[role="combobox"]').value;
   console.log(yahooSearchBar)

}

if(currentDomain.indexOf('bing.com')> -1){
    console.log('bing.com')
   var bingSearchBar = document.querySelector('[type="search"]').value;
   console.log(bingSearchBar)

}
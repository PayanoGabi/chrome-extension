

var currentDomain = document.location.href;

var localKeys;


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    
    localKeys = response;
    arr = [];
    
   // console.log(localKeys)

   Object.entries(localKeys).forEach((item, index) => {


        if(Object.values(item)[0].indexOf("keyDB") > -1 && currentDomain.indexOf('google.com')> -1){
          console.log(item[1]) 
          var stringKeys = " -" + item[1];
            arr.push(" -" + item[1])
            console.log(arr.toString())


            var googleSearchBarCurrentValue = document.querySelector('[aria-label="Search"]');
            googleSearchBarCurrentValue.value += arr.toString()



            for (const [i, value] of arr.entries()) {
                if (i === arr.length - 1) {
                  // console.log(value)
                   console.log(arr[i])



                     // console.log(googleSearchBarCurrentValue.value)

                      
                    
                     // googleSearchBarCurrentValue.setAttribute("values",arr[i])  //arr[i]


                    //  console.log('yahoo.com')
                    var googleSearchBarValue = document.querySelector('[aria-label="Search"]');

                    
                    console.log(googleSearchBarValue.value)
                    
      
                    //   var googleSearchBarCurrentValue = document.querySelector('[aria-label="Search"]');

                    //   console.log(googleSearchBarCurrentValue.value)
      
                
                }
            }

        



           // console.log(googleSearchBarValue)

            googleSearchBarValue.setAttribute("value", googleSearchBarValue += stringKeys)
            //document.querySelector("#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > button").click()
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
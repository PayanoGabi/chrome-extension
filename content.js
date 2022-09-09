

var currentDomain = document.location.href;

var localKeys;


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    
    localKeys = response;
   // console.log(localKeys)

   Object.entries(localKeys).forEach((item, index) => {

     
    //console.log(Object.values(item))

        if(Object.values(item)[0].indexOf("keyDB") > -1){
            console.log(item[1])
            console.log(item)
        }

    })




    

})


function hideKeywordsG(){
    var googleSearchBar = document.querySelector('[aria-label="Search"]')
      
}
function hideKeywordsY(){
      
}
function hideKeywordsB(){
      
}

  if(currentDomain.indexOf('google.com')> -1){
      console.log('google.com')
      var googleSearchBarValue = document.querySelector('[aria-label="Search"]').value;
      hideKeywordsG()

      console.log(googleSearchBarValue)
      
  }

 

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
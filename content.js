

var currentDomain = document.location.href;

var localKeys;


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    
    localKeys = response;
    console.log(localKeys)

   

    var keyDis = Object.values(localKeys)
    console.log(keyDis)

   var keyd = Object.keys(localKeys)
   console.log(keyd)
    

    if(Object.keys(localKeys).indexOf('keyDB')> -1){
        console.log(keyDis)

    }
    

})
//console.log(localKeys)





//chrome.runtime.sendMessage('hrllo world'); 


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
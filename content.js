

var currentDomain = "current Href is " + document.location.href;

// chrome.runtime.sendMessage({message: "hi"}, (response) => {
//     console.log(response.message);
//   });
 //console.log(currentDomain)

//   chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
//     chrome.runtime.sendMessage({ message: currentDomain }, function (response) {
//         console.log(currentDomain);
//       });
//   }); 
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });

  if(currentDomain.indexOf('google.com')> -1){
      console.log('google.com')
      var googleSearchBar = document.querySelector('[aria-label="Search"]').value;
      console.log(googleSearchBar)
      
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
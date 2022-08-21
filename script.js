

   // A document ready block with javascript.
document.addEventListener("DOMContentLoaded", function(event) { 

    

        function getCurrentTabUrl() {
            var queryInfo = {
              active: true,
              currentWindow: true,
            }
          
            chrome.tabs.query(queryInfo, function(tabs) {
              var tab = tabs[0]
              alert(tab.url)
            })
          }
          
          document.querySelector('#startTool').addEventListener('click', getCurrentTabUrl)
        

  });

        


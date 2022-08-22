

   // A document ready block with javascript.
document.addEventListener("DOMContentLoaded", function(event) { 

    document.querySelector("body > section").style.display = "none";


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


          function runFunction(e){

          document.querySelector('#startTool').addEventListener('click', function(){
          getCurrentTabUrl()
          document.querySelector("body > section").style.display = "block";
          document.querySelector("body > header > div:nth-child(4)").style.display= 'none';
          })

          }
          runFunction()
           

  });

        


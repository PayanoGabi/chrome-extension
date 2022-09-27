
console.log('This is always executed');
var startBtn = document.querySelector('#startTool')

startBtn?.addEventListener('click', (e:Event) => hidekeys())


const catBtn = document.getElementById("categorize");


function getGroup(){
  const catMod = document.createElement("div");
  const catHead = document.createElement("h1")
  const catClose = document.createElement("button")
  catClose.textContent = "X";
  catHead.textContent = "Categories"
  const exBod = document.getElementsByTagName('body')[0];
  console.log(exBod)
  catMod.id="categorizeMod";
  exBod?.appendChild(catMod);

  catMod?.appendChild(catClose)
  catMod?.appendChild(catHead);

  catClose?.addEventListener('click', (e:Event) => closeCatMod())

  function closeCatMod(){
    
    catMod.style.display = "none";


  }
}

catBtn?.addEventListener('click', (e:Event) => getGroup())





function hidekeys(){


  const form = document.querySelector("body > section > div.row-One > form") as HTMLFormElement;

  //console.log(form)
  // will need to check what information is entered in form - for now using sessionStorage

  var tabID;


  // const message = 'This is a message from the extension'

  const message = localStorage;

  // send message to active tab
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, message);
      }
    });
  });

  type wordArr = {
    keyword: string;

  };

  // creating an array that will contain strings
  const arr: wordArr[] = [];



  form.onsubmit = () => {
    const formData = new FormData(form);

    const text = formData.get('keywords') as string;
    console.log(text);

  const textWord: wordArr = {keyword:text}

  arr.push(textWord)
  console.log(arr)

  var keyIndex;

    for (var i = 0; i < arr.length; i++) {
      keyIndex = [i];
    }


  localStorage.setItem("keyDB" + keyIndex + "", text);

  return false; // prevent reload
  };




  function getCurrentTabUrl() {
      var queryInfo = {
        active: true,
        currentWindow: true,
      }
    
      chrome.tabs.query(queryInfo, function(tabs) {
        var tab = tabs[0]
        var currentHref = tab.url
        console.log(tab.url)
        console.log(document)        
      })
    } 
    getCurrentTabUrl()

    console.log(chrome.tabs)

  // const r = Object.keys(arr);
  // console.log(r + "key");



  // if(currentHref?.indexOf('google')){
  //   console.log('true dat')


  // }
  //  const values = Object.keys(arr)

  //  const commaJoinedValues = values.join(",");

  // // send message to content
  // chrome.runtime.sendMessage(message);

  // send message to every active tab
  // chrome.tabs.query({}, (tabs) => {
  //   tabs.forEach((tab) => {
  //     if (tab.id) {
  //       chrome.tabs.sendMessage(tab.id, message);
  //     }
  //   });
  // });

  // get current tab ID
  // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {  
  //   // chrome.tabs.sendMessage(tabs[0].id, {message: 'Hello Background! How are you?'}, function(response) {  
      
  //   // });  
  // tabs[0].id

  // });

}
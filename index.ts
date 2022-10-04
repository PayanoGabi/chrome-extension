
console.log('This is always executed');


  var submitForm = document.getElementById('keyForm') as HTMLFormElement;
  const btnKey = document.getElementById('keywordBtn') as HTMLElement 

  submitForm?.addEventListener("submit", (e:Event) => listenerFunction());


function listenerFunction() {
 

  if(submitForm.value = " "){

    var greenSubmitField = '<span id="greenSubmit" style="width: 100%;height: 20%;background-color: green;margin: 0;color: black;">Enter Text</span>';
    btnKey.style.marginBottom = "0px";
    submitForm.innerHTML += greenSubmitField;
    const myTimeout = setTimeout(showBanner, 2000);


        function showBanner() {
          
          clearTimeout(myTimeout);
          const greenFields = document.getElementById('greenSubmit') as HTMLStyleElement;
          greenFields.style.display = "none";

        submitForm.reset()
       

        }

    // return false;

  }else{
      
    var formValue = document.getElementById('blockContent') as HTMLFormElement;
    formValue.value = ""; 
    var greenSubmitField = '<span id="greenSubmit" style="width: 100%;height: 20%;background-color: green;margin: 0;color: black;">Thank You</span>';


    btnKey.style.marginBottom = "0px";
    submitForm.innerHTML += greenSubmitField;
  }
}



var startBtn = document.querySelector('#startTool')

//startBtn?.addEventListener('click', (e:Event) => hidekeys())


const catBtn = document.getElementById("categorize");


function getGroup(){
  const catMod = document.createElement("div");
  const catHead = document.createElement("h1")
  var catHTML = '<button>Add New</button><button>Delete</button>';
  var catGroups = '<ul id="myGroups"><li>Technology</li><li>Job Search</li><li>Fashion</li><li>Recipe</li><li>Pop Culture</li></ul>'
  const catClose = document.createElement("button")
  catClose.textContent = "X";
  catHead.textContent = "Folders";
  catMod.innerHTML += catHTML;
  const exBod = document.getElementsByTagName('body')[0];
  console.log(exBod)
  catMod.id="categorizeMod";
  exBod?.appendChild(catMod);
  catMod.innerHTML += catGroups;

  catMod?.appendChild(catClose)
  catMod?.appendChild(catHead);

  catClose?.addEventListener('click', (e:Event) => closeCatMod())

  function closeCatMod(){
    
    catMod.style.display = "none";


  }
}

catBtn?.addEventListener('click', (e:Event) => getGroup())



document.querySelectorAll("#myGroups > li").forEach(function(i, index){


  i?.addEventListener("onmouseover", (e:Event) => hoverFolder())

  function hoverFolder(){

  //i.id = "activeTab" 
   console.log('over')
  }
  i?.addEventListener("onmouseout", (e:Event) => overFolder())


  function overFolder(){


     console.log('out')
    }
  
})



//function hidekeys(){


  const form = document.querySelector("body > section > div.row-One > form") as HTMLFormElement;


  var tabID;


  const message = localStorage; // This is a message from the extension

  

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

////}
console.log('This is always executed');
var submitForm = document.getElementById('keyForm');
var btnKey = document.getElementById('keywordBtn');
submitForm === null || submitForm === void 0 ? void 0 : submitForm.addEventListener("submit", function (e) { return listenerFunction(); });
function listenerFunction() {
    if (submitForm.value = " ") {
        var greenSubmitField = '<span id="greenSubmit" style="width: 100%;height: 20%;background-color: green;margin: 0;color: black;">Enter Text</span>';
        btnKey.style.marginBottom = "0px";
        submitForm.innerHTML += greenSubmitField;
        var myTimeout_1 = setTimeout(showBanner, 2000);
        function showBanner() {
            clearTimeout(myTimeout_1);
            var greenFields = document.getElementById('greenSubmit');
            greenFields.style.display = "none";
            submitForm.reset();
        }
        // return false;
    }
    else {
        var formValue = document.getElementById('blockContent');
        formValue.value = "";
        var greenSubmitField = '<span id="greenSubmit" style="width: 100%;height: 20%;background-color: green;margin: 0;color: black;">Thank You</span>';
        btnKey.style.marginBottom = "0px";
        submitForm.innerHTML += greenSubmitField;
    }
}
var startBtn = document.querySelector('#startTool');
//startBtn?.addEventListener('click', (e:Event) => hidekeys())
var catBtn = document.getElementById("categorize");
function getGroup() {
    var catMod = document.createElement("div");
    var catHead = document.createElement("h1");
    var catHTML = '<button>Add New</button><button>Delete</button>';
    var catGroups = '<ul id="myGroups"><li>Technology</li><li>Job Search</li><li>Fashion</li><li>Recipe</li><li>Pop Culture</li></ul>';
    var catClose = document.createElement("button");
    catClose.textContent = "X";
    catHead.textContent = "Folders";
    catMod.innerHTML += catHTML;
    var exBod = document.getElementsByTagName('body')[0];
    console.log(exBod);
    catMod.id = "categorizeMod";
    exBod === null || exBod === void 0 ? void 0 : exBod.appendChild(catMod);
    catMod.innerHTML += catGroups;
    catMod === null || catMod === void 0 ? void 0 : catMod.appendChild(catClose);
    catMod === null || catMod === void 0 ? void 0 : catMod.appendChild(catHead);
    catClose === null || catClose === void 0 ? void 0 : catClose.addEventListener('click', function (e) { return closeCatMod(); });
    function closeCatMod() {
        catMod.style.display = "none";
    }
}
catBtn === null || catBtn === void 0 ? void 0 : catBtn.addEventListener('click', function (e) { return getGroup(); });
document.querySelectorAll("#myGroups > li").forEach(function (i, index) {
    i === null || i === void 0 ? void 0 : i.addEventListener("onmouseover", function (e) { return hoverFolder(); });
    function hoverFolder() {
        //i.id = "activeTab" 
        console.log('over');
    }
    i === null || i === void 0 ? void 0 : i.addEventListener("onmouseout", function (e) { return overFolder(); });
    function overFolder() {
        console.log('out');
    }
});
//function hidekeys(){
var form = document.querySelector("body > section > div.row-One > form");
var tabID;
var message = localStorage; // This is a message from the extension
// send message to active tab
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs.forEach(function (tab) {
        if (tab.id) {
            chrome.tabs.sendMessage(tab.id, message);
        }
    });
});
// creating an array that will contain strings
var arr = [];
form.onsubmit = function () {
    var formData = new FormData(form);
    var text = formData.get('keywords');
    console.log(text);
    var textWord = { keyword: text };
    arr.push(textWord);
    console.log(arr);
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
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        var currentHref = tab.url;
        console.log(tab.url);
        console.log(document);
    });
}
getCurrentTabUrl();
console.log(chrome.tabs);
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

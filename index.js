console.log('This is always executed');
var startBtn = document.querySelector('#startTool');
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', function (e) { return hidekeys(); });
var catBtn = document.getElementById("categorize");
function getGroup() {
    var catMod = document.createElement("div");
    var catHead = document.createElement("h1");
    var catClose = document.createElement("button");
    catClose.textContent = "X";
    catHead.textContent = "Categories";
    var exBod = document.getElementsByTagName('body')[0];
    console.log(exBod);
    catMod.id = "categorizeMod";
    exBod === null || exBod === void 0 ? void 0 : exBod.appendChild(catMod);
    catMod === null || catMod === void 0 ? void 0 : catMod.appendChild(catClose);
    catMod === null || catMod === void 0 ? void 0 : catMod.appendChild(catHead);
    catClose === null || catClose === void 0 ? void 0 : catClose.addEventListener('click', function (e) { return closeCatMod(); });
    function closeCatMod() {
        catMod.style.display = "none";
    }
}
catBtn === null || catBtn === void 0 ? void 0 : catBtn.addEventListener('click', function (e) { return getGroup(); });
function hidekeys() {
    var form = document.querySelector("body > section > div.row-One > form");
    //console.log(form)
    // will need to check what information is entered in form - for now using sessionStorage
    var tabID;
    // const message = 'This is a message from the extension'
    var message = localStorage;
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
}

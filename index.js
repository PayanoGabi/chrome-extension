// if (document.location.href.indexOf('google.com')> -1) 
// {
console.log('This will always executed.');
// // }
// import { currentHref } from 'main.js'
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
        // let strGoogle = new String('google')
        if (currentHref === null || currentHref === void 0 ? void 0 : currentHref.indexOf('google')) {
            console.log('truedat');
        }
    });
}
getCurrentTabUrl();
console.log(chrome.tabs);

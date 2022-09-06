
console.log('This is always executed');

const form = document.querySelector("body > section > div.row-One > form") as HTMLFormElement;
console.log(form)

type wordArr = {
  keyword: string;
};


const arr: wordArr[] = [];

form.onsubmit = () => {
  const formData = new FormData(form);

  const text = formData.get('keywords') as string;
  console.log(text);

 const textWord: wordArr = {keyword:text}

 arr.push(textWord)
 console.log(arr)


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

     // let strGoogle = new String('google')

        if(currentHref?.indexOf('google')){
            console.log('truedat')

        }
        
    })
  } 
  getCurrentTabUrl()


  console.log(chrome.tabs)

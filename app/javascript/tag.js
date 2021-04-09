if (location.pathname.match("tweets/new")){
  document.addEventListener("DOMContentLoaded", () =>{
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `search/?keyword=${keyword}`, true); 
      //openメソッドの第一引数にHTTPメソッド、第二引数にURL、第三引数には非同期通信
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const tagName = XHR.response.keyword;
      };
    });
  });
}
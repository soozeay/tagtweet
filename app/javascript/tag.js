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
        const searchResult = document.getElementById("search-result");
        tagName.forEach((tag) => {
          const childElement = document.createElement("div");
          childElement.setAttribute("class", "child");
          childElement.setAttribute("id", tag.id);
          childElement.innerHTML = tag.name;
          searchResult.appendChild(childElement);
          const clickElement = document.getElementById(tag.id);
          clickElement.addEventListener("click", () => {
            document.getElementById("tweets_tag_name").value = clickElement.textContent;
            clickElement.remove();
          });
        });
      };
    });
  });
};
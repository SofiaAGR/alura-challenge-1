function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }
  

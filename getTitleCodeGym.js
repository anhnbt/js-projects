let instancename = document.getElementsByClassName("instancename");
let data = "";
for (let i = 0; i < instancename.length; i++) {
  let name = instancename[i].innerHTML;
  let title = name.split("<")[0];
  data += `<div><input style="width: 100%;padding: 12px 20px;margin: 8px 0;box-sizing: border-box;" type="text" value="${title}" onclick="copy(this); return false;"></div>`;
}

document.write(data);

function copy(element) {
  element.style.backgroundColor = "yellow";
  navigator.clipboard
    .writeText(element.value)
    .then(() => {
      console.log('Text copied to clipboard');
      element.value = "Text copied to clipboard";
    })
    .catch((err) => {
      console.error('Could not copy text: ', err);
      element.value = "Could not copy text: " + err;
    });
}

document.querySelector("#get").onclick = function () {
  const sentences = document.querySelector("#data").value.split("\n");
  let result = sentences
    .map((x) => {
      let temp = x.split(":");
      return '{"' + temp[0] + '":' + temp[1] + '}\n';
    })
    .toString();
  document.querySelector("#result").innerHTML = result;
};

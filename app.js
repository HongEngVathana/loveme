function handleYes() {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = `
        <p>I Love You Too!</p>
        <img src="https://i.pinimg.com/564x/b0/69/79/b06979a7fae3c403ee906ee182490292.jpg" alt="Flower" class="flower-image">
    `;
  console.log("User clicked Yes");
}

function handleNo() {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = `
        <p>Sad and Crying</p>
        <p>😢</p>
    `;
  console.log("User clicked No");
}

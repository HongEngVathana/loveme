function handleYes() {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = `
        <p>I Love You Too!</p>
        <img src="flower.jpg" alt="Flower" class="flower-image">
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

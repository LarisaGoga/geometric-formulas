function showResultInDomKvadrat() {
  document.getElementById("ploschadKvadrata").innerHTML = countAreaOfSquare(
    lengthOfSquare.value
  );
}

function showResultInDomPriamougolnika() {
  document.getElementById("ploschadPriamougolnika").innerHTML =
    countAreaOfRectangle(
      firstLengthOfRectangle.value,
      secondLengthOfRectangle.value
    );
}

function showResultInDomParalelograma() {
  document.getElementById("ploschadParalelograma").innerHTML =
    countAreaOfRectangle(
      lengthOfParallelogram.value,
      heightOfParallelogram.value
    );
}

function showResultInDomRomba() {
  document.getElementById("ploschadRomba").innerHTML = countAreaOfRectangle(
    lengthOfRhombus.value,
    heightOfRhombus.value
  );
}

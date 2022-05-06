function getAdvice() {
  document.getElementById('newAdvice').classList.add('hover');
  fetch('https://api.adviceslip.com/advice').then((res) => res.json()).then((data) => {
      document.getElementById('advice').innerText = `"${data.slip.advice}"`;
      document.getElementById('slipId').innerText = `Advice #${data.slip.id}`;
      document.getElementById('newAdvice').classList.remove('hover');
});
}

getAdvice();

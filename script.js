let cores = [];
let displayCPUCores = document.querySelector('.cores');
for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  cores.push(i);
  displayCPUCores.innerText = cores.length;
}

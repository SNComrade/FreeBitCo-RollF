function remainingTime() {
if (document.querySelector('title').innerHTML == "FreeBitco.in - Free Bitcoin Wallet, Faucet, Lottery and Dice!"){
  document.getElementById("free_play_form_button").onclick = function clicked(){
  window.location.hash = 'reload';
  // window.location.reload();
  // return;
};document.getElementById("free_play_form_button").click(); /*click roll*/ console.log("It worked"); document.querySelector('.close-reveal-modal').click(); /* close-reveal-modal*/}}
remainingTime()

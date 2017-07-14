function countdown(callback) {
  setTimeout(callback(),2000);
  callback();
}

// Your code here
//Move dodger to the left
function moveDodgerLeft() {
   const dodger = document.getElementById('dodger');
   const leftNumbers = dodger.style.left.replace('px','');
   let left = parseInt(leftNumbers, 10);
   
   if (left > 0) {
    dodger.style.left = `${left - 1}px`;
   }
}
// move dodger right
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // assuming the dodger's container width is 400px and dodger's width is 40px
      dodger.style.left = `${left + 1}px`;
    }
  }
  
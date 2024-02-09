// // write code for generating random number under 100%
// // generate a random number between 0 and 99.99
// const input1 = document.getElementById("name1");
// const input2 = document.getElementById("name2");
// const clearButton = document.getElementById("clear");
// const generateButton = document.getElementsById("clear");
// const percentage = document.getElementById("percentage");

// clearButton.addEventListener("click", () => {
//   input1.value = "";
//   input2.value = "";
// });

// generateButton.addEventListener("click", () => {
//   if(input1 == null || input2 ==null){
//     alert("Enter the parters/your name !");
//   }
//   const randomPercentage = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
// //   percentage.textContent = `${randomPercentage}%`;
//   document.getElementById(percentage).innerHTML=`${randomPercentage}%`;
// });
document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    if (!name1 || !name2) {
        alert('Please enter both names.');
        return;
    }
    const loveScore = Math.floor(Math.random() * 101);
    document.getElementById('lovescore').innerHTML = `${loveScore}%!`;
    document.getElementById('content').innerHTML = `Your love score is off the charts, ${loveScore}% reflecting the depth and strength of your connection. It's a testament to the love, care, and devotion you share. Our love story is a beautiful tapestry, woven together by the threads of laughter, tears, and unwavering commitment. your love score is a reflection of the love you share.`;
});
document.getElementById('loveForm').addEventListener('reset', function() {
    document.getElementById('lovescore').textContent = '';
    document.getElementById('content').textContent = 'Your love score is a reflection of your connection';
});
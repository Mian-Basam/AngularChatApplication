let counter =document.getElementById("counter");
let count=0
function increment()
{
    count=count+1;
    counter.textContent=count;

}
// if variable is not decleare before use  it throws 
// Reference error :cannot access vaiable myage before initilization 
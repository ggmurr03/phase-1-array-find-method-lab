// code your solution here
const record = [
    { year: "2015", result: "."},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]


function superbowlWin(array){
    if (array.find(obj=>obj.result==="W")===undefined) return array.find(obj=>obj.result==="W")
   const yearValue = array.find(obj=>obj.result==="W").year
   console.log(typeof yearValue)
   return yearValue
}

superbowlWin(record)
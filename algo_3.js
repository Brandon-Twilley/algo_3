function problem_1(){
     function printAverage(x){
        sum = 0;
        for(var i = 0; i < x.length; i++){
             sum = sum + x[i];
        }
        return sum / x.length;
        // your code here
     }
     y = printAverage([1,2,3]);
     console.log(y); // should log 2

     y = printAverage([2,5,8]);
     console.log(y); // should log 5
}

function problem_2(){
     function returnOddArray(){
          var return_array = [];
          for(var i = 0; i <= 255; i++){
               if(i % 2 == 1) {
                    return_array.push(i);
               }
          }
          return return_array;
     }
     y = returnOddArray();
     console.log(y); // should log [1,3,5,...,253,255]
}

function problem_3(){
     function squareValue(x){
          // your code here
          var return_array = []
          for(var i = 0; i < x.length; i++){
               return_array.push(x[i] * x[i]);
          }
          return return_array;
     }
     y = squareValue([1,2,3]);
     console.log(y); // should log [1,4,9]

     y = squareValue([2,5,8]);
     console.log(y); // should log [4,25,64]
}

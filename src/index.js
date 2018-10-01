module.exports = function getZerosCount(number, base) {
  // your implementation
    var arr = [];
    var counter = [];
    if(base > 0 && base != 1){
        for( var i = 2; i <= base; i++){
            while(base % i == 0 && base > 1){
                arr.push(i);
                base = base / i;
            }
            if(base/i == 1){
                arr.push(base);
            }
        }
    }

    function bringCount(arr) {
        for (var n=1, i=1; n<arr.length; ++n) {
            if (arr[n] !== arr[n-1]) {
                arr[i++] = arr[n];
            }
        }
        arr.length = i;
        return arr;
    }

    var result = [];
    for (var i = 0; i <= arr.length; ++i)
    {
        var a = arr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }

    result = result.filter(function(x) {
        return x !== undefined && x !== null;
    });

    bringCount(arr);

    for (var j = 0; j <= arr.length-1; j++) {
        counter [j] = 0;
        for (var i = number; i > 0; i = Math.floor(i/arr[j])) {
            counter[j] = counter[j] + Math.floor(i/arr[j]);
        }
    }

    for (var i = 0; i <= arr.length-1; i++) {
        counter[i]=Math.floor(counter[i]/result[i]);
    }

    min = counter[0];
    max = min;

    for (var i = 1; i < counter.length; ++i) {
        if (counter[i] > max) max = counter[i];
        if (counter[i] < min) min = counter[i];
    }
return min;

}
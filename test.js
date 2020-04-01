//1. (A)

//f("junyiacademy") == "ymedacaiynuj"

function reverse(str) {
  return str.split("").reverse().join("");
}

var kk = reverse("junyiacademy")
console.log(kk)

//1.(B)
function reverse2(str) {
  var ostr = str.split(" ").map(function (item) {
    item = item.split("").reverse().join("");
    return item;
  });

  return ostr.join(" ")
}

var kk2 = reverse2("flipped class room is important")
console.log(kk2)

//2.
function checkit(num) {

  var i;
  var arr = [];
  for (i = 1; i <= num; i++) {
    arr[i - 1] = i;
  }

  var arr2 = arr.filter(function (item) {
    // ex:include 15, 30 ....
    if (item % 3 == 0 && item % 5 == 0) {
      return item;
    }
    // ex: exclude 3 and 5
    if (item % 3 != 0 && item % 5 != 0) {
      return item;
    }
  });

  return arr2.length;
}

var ss = checkit(15)
console.log(ss)


//３.Anser
//拿只有一個東西的代子，如果是鉛筆，則另一個只有一個東西的代子就是原子筆。
//有兩個東西的一定是有鉛筆與原子筆


// 4.Anser 
// 三人出了 900 - 90 = 810元也就是店員拿到的
// 三人手上有　90元

//　拿店員手上的 810元　去加上 60元　說不通，因為６０元已經在他手上了。

// 應該把店員手上的加上三個人手上的錢才是 900元

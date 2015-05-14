function permute(arr, seed){
  var length, choice, salt;
  length = arr.length;
 
  if(length < 2) return arr;

  salt = arr[0].charCodeAt(0);
  choice = arr[(seed + salt) % length];
  arr.splice((seed + salt) % length, 1);
  arr = permute(arr, seed + salt);
  arr.unshift(choice);

  return arr;
}

function permuteText(text, seed){
  permuteWord = function(match){
    var b, e, arr;
    if (match.length < 3) { return match; }
    else {
      arr = match.split("");
      b = arr.shift();
      e = arr.pop();
      return b+permute(arr,seed).join("")+e;
    }
  };

  return text.replace(/([\wа-я])([\wа-я]+)([\wа-я])/gi, permuteWord);
}


module.exports = function check(str, bracketsConfig) {
  // if(str.length % 2){
    // for (var i=0; i<bracketsConfig.length; i++) {
    //   bracketsConfig[i] = bracketsConfig[i].join('');
    // }

    var arr2=[];

    for(i=0;i<bracketsConfig.length;i++) {
      arr2.push(bracketsConfig[i]);
    }

    for (var i=0; i<arr2.length; i++) {
      arr2[i] = arr2[i].join('');
    }

    while(true) {
      var str2=str;
      for(var i=0; i<arr2.length; i++) {
        while(true){
          var foundPos=str.indexOf(arr2[i]);
          if(foundPos>=0) {
            str=str.substring(0,foundPos) + str.substring(foundPos+2);
          }
          else break;
        }
      }
      if(str==str2 || str.length==0) break;
    }
    
    if(str.length > 0) return false;
    else return true;
  // }
  // else return false; //odd length means, that at least one bracket doesn't have a pair
}
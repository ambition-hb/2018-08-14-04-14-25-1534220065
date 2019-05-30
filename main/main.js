module.exports = function main(str) {
    
    var map = new Map();
    map.set('0', "._.|.||_|");
    map.set('1', ".....|..|");
    map.set('2', "._.._||_.");
    map.set('3', "._.._|._|");
    map.set('4', "...|_|..|");
    map.set('5', "._.|_.._|");
    map.set('6', "._.|_.|_|");
    map.set('7', "._...|..|");
    map.set('8', "._.|_||_|");
    map.set('9', "._.|_|..|");
    var result =new Array();
    for (var i = 0; i < str.length; i++) {
        map.forEach(function (value,key,map) {
            if(str.charAt(i)==key)
                result.push(value);
        })
    }
    var st='';
    var s='';
    for (var a=0;a<9;a=a+3){
        var st='';
        for(var j=0;j<result.length;j++) {
            if(j!=result.length-1)
                st+=result[j].substring(a,a + 3)+' ';
            else
                st+=result[j].substring(a,a + 3);
        }
        s+=st+'\n';
    }
    return s;
};
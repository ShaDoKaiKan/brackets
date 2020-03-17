module.exports = function check(str, bracketsConfig) {
    let currentLength;
    
    function remove() {
      currentLength = str.length;
      bracketsConfig.forEach(item => str = str.replace(item.join(''), ''));
      if (currentLength !== str.length) {
        remove();
      } 
    };
    remove();
    
    if (str.length === 0) {
        return true;
    } else return false;
    
  
}


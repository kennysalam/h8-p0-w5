function changeVocals (str) {
    var vocal = 'aiueoAIUEO';
    var vocalChange = 'bjvfpBJVFP';
    var output = '';
    for (var i = 0; i < str.length; i++) {
        var adaVocal = false;
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j]) {
                output += vocalChange[j];
                adaVocal = true;
                break;
            }
        }
        if (adaVocal === false) {
            output += str[i];
        }
    }
    return output;
  }
  
  function reverseWord (str) {
    var output = '';
    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
  }
  
  function setLowerUpperCase (str) {
    var output = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            output += str[i].toLowerCase();
        } else {
            output += str[i].toUpperCase();
        }
    }
    return output;
  }
  
  function removeSpaces (str) {
    var output = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            output += str[i];
        }
    }
    return output;
  }
  
  function passwordGenerator (name) {
    if (name.length < 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`;
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
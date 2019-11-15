function kaliTerusRekursif(angka) {
    var angkaString = String(angka);
    if (angkaString.length === 1) {
        return Number(angkaString);
    } else {
        var angkaPertama = angkaString[0];
        for (var i = 1; i < angkaString.length; i++) {
            angkaPertama *= angkaString[i];
        }
        return kaliTerusRekursif(angkaPertama);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
export function getAverage(stringArray) {
    let sum = 0;
    
    stringArray.map(stringValue => parseInt(stringValue))
    .forEach(element => {
        sum += element;
    });

    return (sum/stringArray.length);
}

export function toUpperCase(firstName, lastName){   
      if(lastName== ""){
          var concatName = firstName;
      } else{
          concatName = firstName.concat(" ", lastName);
      }
            
      var fullName = concatName.toUpperCase();
      return fullName;
}

export function getImages(url){
    return String(url);
}
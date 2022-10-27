function getDateBR (dateString: string): Date {
    var dataSplit = dateString.split('/');
    var dateConverted;
  
    if (dataSplit[2].split(" ").length > 1) {
  
        var hora = dataSplit[2].split(" ")[1].split(':');
        dataSplit[2] = dataSplit[2].split(" ")[0];
        dateConverted = new Date(parseInt(dataSplit[2]), parseInt(dataSplit[1])-1, parseInt(dataSplit[0]), parseInt(hora[0]), parseInt(hora[1]));
  
    } else {
        dateConverted = new Date(parseInt(dataSplit[2]), parseInt(dataSplit[1]) - 1, parseInt(dataSplit[0]));
    }
  
    return dateConverted;
  }

  export  { getDateBR }
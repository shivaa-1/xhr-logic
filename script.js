var xhr = new httprequest();
xhr.onreadystateexchange = function(){
    if(xhr.readystate == 4 && xhr.status == 200){
        let data = JSON.parse(this.responseText);

        for(let i=0; i < data.lenght; i++){
            console.log("1st for");
            if (data[i].name.common == "India"){
                let obj = data[i].language;
                for (key in obj){
                    console.log(obj[key]);
                }
                console.log("1st if");
                console.log(`
                Country name: ${data[i].name.common}
                Currency name: ${data[i].cureencies.INR.name}
                Capital: ${data[i].capital}
                Region: ${data[i].region}
                Language: ${data[i].languages}
                Population: ${data[i].population}
                Country Flag: ${data[i].flags.png}
                `
                );
            }
        }
    }

}

xhr.open("GET", "https://restcountries.com/v3.1/all#");
xhr.send();

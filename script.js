const results = document.getElementById('results');
const act = document.getElementById('act');
const change = document.getElementById('change');

/* const resultat = ()=>{
results.innerHTML=c[1];
}*/
const num = (numero)=>{      //fontion qui transforme chiffre en lettre
    let resultat="";
   let diz="";
   let cent="";
   let unite="";
if(numero<1000){
    if((numero%100)%10){ //tranforme unite
        if((numero/100)>=1 || ((numero%100)/10)>=1){
            unite+='-';
        }

        switch ((numero%100)%10){
            case 1: unite+="un";
            break;
            case 2: unite+="deux";
            break;
            case 3: unite+="trois";
            break;
            case 4: unite+="quatre";
            break;
            case 5: unite+="cinq";
            break;
            case 6: unite+="six";
            break;
            case 7: unite+="sept";
            break;
            case 8: unite+="huit";
            break;
            case 9: unite+="neuf";
            break;
            }

    }
    if((numero%100)/10>=1){         //transforme dizaine
        if((numero/100)>=1){
            
            diz+="-";
        }
        
        const tmp=Math.trunc((numero%100)/10);

        switch (tmp){
            case 1: 
                if((numero%100)%10){
                    if(((numero%100)%10)<7){
                     unite="";   
                    }
                    
                    switch ((numero%100)%10){       // lettrage speciale
                        case 1: diz+="onze";
                        break;
                        case 2: diz+="douze";
                        break;
                        case 3: diz+="treize";
                        break;
                        case 4: diz+="quatorze";
                        break;
                        case 5: diz+="quinze";
                        break;
                        case 6: diz+="seize";
                        break;
                        default : diz+="dix";
                        break;
                        
            
                    }
                }
                break;
                    
                
            
            case 2: diz+="vingt";
            break;
            case 3: diz+="trente";
            break;
            case 4: diz+="quarante";
            break;
            case 5: diz+="cinquante";
            break;
            case 6: diz+="soixante";
            break;
            case 7: diz+="septante";
            break;
            case 8: diz+="quatre-vingt";
            break;
            case 9: diz+="nonante";
            break;
            

        }
    }
    if(Math.trunc(numero/100)>0){           // tranforme centaine
        const tmp=Math.trunc(numero/100);
        switch (tmp){
            case 1: cent+="cent";
            break;
            case 2: cent+="deux-cent";
            break;
            case 3: cent+="trois-cent";
            break; 
            case 4: cent+="quatre-cent";
            break;
            case 5: cent+="cinq-cent";
            break;
            case 6: cent+="six-cent";
            break;
            case 7: cent+="sept-cent";
            break;
            case 8: cent+="huit-cent";
            break;
            case 9: cent+="neuf-cent";
            break;
            

        }
    }
    if(unite=="-un"){
        if(diz=="quatre-vingt" || diz=="-quatre-vingt"){

        }
        else{
        unite="-et-un";
        }
    }
    resultat=cent+diz+unite;
    results.innerHTML=resultat;         //resultat finale
}

else{
    results.innerHTML="Numero trop elevé";
}
}
change.addEventListener('input',(e)=>{
    num(e.target.value);
})

act.addEventListener('click',()=>{
    results.innerHTML='Hello';});






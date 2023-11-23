alert("BIENVENIDO");
    var  date = Number(prompt("Digita datos a consultar"));
    console.log("Number date "+ date);
    while (date === null || date === "00") {
        date = Number(prompt("debes ingresar solo numeros"));
      
        console.log("Number date "+ date);
        }
        var x = Number(prompt("Ingresa numero guia"));
 //var x = Number(document.getElementById('boxText1').value);

while (x === null || x === "00" || x > 37 || x < 0) {
    x = Number(prompt("Debes ingresar solo numeros entre (0) y (37)"));
 //x = Number(document.getElementById('boxText1').value);

}
console.log(x);
var aus = 1;
var aci = 0;

var five0 = new Array();
var five1 = new Array();
var five2 = new Array();
var five3 = new Array();
var five4 = new Array();
var five5 = new Array();
var five6 = new Array();
var five7 = new Array();
var five8 = new Array();
var five9 = new Array();
var five10 = new Array();
var five11 = new Array();
var five12 = new Array();
var five13 = new Array();
var five14 = new Array();
var five15 = new Array();
var five16 = new Array();
var five17 = new Array();
var five18 = new Array();
var five19 = new Array();
var five20 = new Array();
var five21 = new Array();
var five22 = new Array();
var five23 = new Array();
var five24 = new Array();
var five25 = new Array();
var five26 = new Array();
var five27 = new Array();
var five28 = new Array();
var five29 = new Array();
var five30 = new Array();
var five31 = new Array();
var five32 = new Array();
var five33 = new Array();
var five34 = new Array();
var five35 = new Array();
var five36 = new Array();
var five37 = new Array();

for (let i = 0; i < date; i++) {


    var y = Number(prompt("Ingresa numero nuevo"));
    while (y === null || y === "00" || y > 37 || y < 0) {
      //  y = Number(prompt("Debes ingresar solo numeros entre (0) y (37)"));
    }
    console.log(y);
    if (x === 0 && y === 5 || x === 0 && y === 6 || x === 0 && y === 37||
        x === 0 && y === 0 ) {

       aci = i + 1;
       five0.unshift(aci);
       console.log("Eventos :  " + "[ " + five0 + " ]");
       aus = 0;
       alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
       document.getElementById('fiv0').innerHTML = 'Alineacion: ' + '[ ' + five0 + ' ]' + " Sector " + "( " + x + " )"+ " " + "( " + y + ")";
       alert('Alineacion: ' + '[ ' + five0 + ' ]' + " Sector " + "( " + x + " )"+ " " + "( " + y + ")");

 
        } else if (x === 1 && y === 18 || x === 1 && y === 17 || x === 1 && y === 2||
                x === 1 && y === 1) {
                five1.unshift((i + 1));
                console.log("Eventos :  " + "[ " + five1 + " ]");
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv1').innerHTML = 'Alineacion: ' + '[ ' + five1 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";

        }else if (x === 2 && y === 17 || x === 2 && y === 18 || x === 2 && y === 1||
                x === 2 && y === 2) {
                five2.unshift((i + 1));
                console.log(five2);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv2').innerHTML = 'Alineacion: ' + '[ ' + five2 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";

        }else if (x === 3 && y === 12 || x === 3 && y === 11 || x === 3 && y === 4 ||
                x === 3 && y === 3) {
                five3.unshift((i + 1));
                console.log(five3);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv3').innerHTML = 'Alineacion: ' + '[ ' + five3 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";

        }else if (x === 4 && y === 11 || x === 4 && y === 12 || x === 4 && y === 3 ||
                x === 4 && y === 4) {
                five4.unshift((i + 1));
                console.log(five4);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv4').innerHTML = 'Alineacion: ' + '[ ' + five4 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";

        }else if (x === 5 && y === 0 || x === 5 && y === 37 || x === 5 && y === 6 ||
                x === 5 && y === 5) {
                five5.unshift((i + 1));
                console.log(five5);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv5').innerHTML = 'Alineacion: ' + '[ ' + five5 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
           
        }else if (x === 6 && y === 37 || x === 6 && y === 0 || x === 6 && y === 5 ||
                x === 6 && y === 6) {  
                five6.unshift((i + 1));
                console.log(five6);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv6').innerHTML = 'Alineacion: ' + '[ ' + five6 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
        
        }else if (x === 7 && y === 23 || x === 7 && y === 24 || x === 7 && y === 8 ||
                x === 7 && y === 7) { 
                five7.unshift((i + 1));
                console.log(five7);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv7').innerHTML = 'Alineacion: ' + '[ ' + five7 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
            
        } else if (x === 8 && y === 24 || x === 8 && y === 23 || x === 8 && y === 7 ||
                x === 8 && y === 8) {
                five8.unshift((i + 1));
                console.log(five8);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv8').innerHTML = 'Alineacion: ' + '[ ' + five8 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                
        }  else if (x === 9 && y === 21 || x === 9 && y === 22 || x === 9 && y ===10 ||
                x === 9 && y === 9) { 
                five9.unshift((i + 1));
                console.log(five9);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv9').innerHTML = 'Alineacion: ' + '[ ' + five9 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                    
        }  else if (x === 10 && y === 22 || x === 10 && y === 21 || x === 10 && y ===9 ||
                x === 10 && y === 10) { 
                five10.unshift((i + 1));
                console.log(five10);
                aci = i + 1;
                aus = 0;
                alert("factor 5 en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv10').innerHTML = 'Factor 5: ' + '[ ' + five10 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                        
        }  else if (x === 11 && y === 4 || x === 11 && y === 3 || x === 11 && y ===12 ||
                x === 11 && y === 11) {
                five11.unshift((i + 1));
                console.log(five11);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv11').innerHTML = 'Alineacion: ' + '[ ' + five11 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                        
        } else if (x === 12 && y === 3 || x === 12 && y === 4 || x === 12 && y ===11 ||
                x === 12 && y === 12) {
                five12.unshift((i + 1));
                console.log(five12);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv12').innerHTML = 'Alineacion: ' + '[ ' + five12 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
        
        }  else if (x === 13 && y === 31 || x === 13 && y === 32 || x === 13 && y ===14 ||
                x === 13 && y === 13) {         
                five13.unshift((i + 1));
                console.log(five13);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv13').innerHTML = 'Alineacion: ' + '[ ' + five13 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
   
        }  else if (x === 14 && y === 32 || x === 14 && y === 31 || x === 14 && y ===13 ||
                x === 14 && y === 14) {                
                five14.unshift((i + 1));
                console.log(five14);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv14').innerHTML = 'Alineacion: ' + '[ ' + five14 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
    
        } else if (x === 15 && y === 29 || x === 15 && y === 30 || x === 15 && y ===16 ||
                x === 15 && y === 15) { 
                five15.unshift((i + 1));
                console.log(five15);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv15').innerHTML = 'Alineacion: ' + '[ ' + five15 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
    
        } else if (x === 16 && y === 30 || x === 16 && y === 29 || x === 16 && y ===15 ||
                x === 16 && y === 16) {  
                five16.unshift((i + 1));
                console.log(five16);
                aci = i + 1;
                aus = 0;
                alert("factor 5 en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv16').innerHTML = 'Factor 5: ' + '[ ' + five16 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                    
        } else if (x === 17 && y === 2 || x === 17 && y === 1 || x === 17 && y ===18 ||
                x === 17 && y === 17) {
                        five17.unshift((i + 1));
                        console.log(five17);
                        aci = i + 1;
                        aus = 0;
                        alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                        document.getElementById('fiv17').innerHTML = 'Alineacion: ' + '[ ' + five17 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                   
        } else if (x === 18 && y === 1 || x === 18 && y === 2 || x === 18 && y ===17 ||
                x === 18 && y === 18) {
                five18.unshift((i + 1));
                console.log(five18);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv18').innerHTML = 'Alineacion: ' + '[ ' + five18 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                   
        }  else if (x === 19 && y === 36 || x === 19 && y === 35 || x === 19 && y ===20 ||
                x === 19 && y === 19) {
                five19.unshift((i + 1));
                console.log(five19);
                aci = i + 1;
                aus = 0;
                alert("factor 5 en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv19').innerHTML = 'Factor 5: ' + '[ ' + five19 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                   
        } else if (x === 20 && y === 35 || x === 20 && y === 36 || x === 20 && y ===19 ||
                x === 20 && y === 20) {
                five20.unshift((i + 1));
                console.log(five20);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv20').innerHTML = 'Alineacion: ' + '[ ' + five20 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                   
        }  else if (x === 21 && y === 9 || x === 21 && y === 10 || x === 21 && y ===22 ||
                x === 21 && y === 21) {
                five21.unshift((i + 1));
                console.log(five21);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv21').innerHTML = 'Alineacion: ' + '[ ' + five21 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";

        } else if (x === 22 && y === 10 || x === 22 && y === 9 || x === 22 && y ===21 ||
                x === 22 && y === 22) {
                five22.unshift((i + 1));
                console.log(five22);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv22').innerHTML = 'Alineacion: ' + '[ ' + five22 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                   
        } else if (x === 23 && y === 7 || x === 23 && y === 8 || x === 23 && y ===24 ||
                x === 23 && y === 23) {
                five23.unshift((i + 1));
                console.log(five23);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv23').innerHTML = 'Alineacion: ' + '[ ' + five23 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
    
        } else if (x === 24 && y === 8 || x === 24 && y === 7 || x === 24 && y ===23 ||
                x === 24 && y === 24) {
                five24.unshift((i + 1));
                console.log(five24);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv24').innerHTML = 'Alineacion: ' + '[ ' + five24 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                   
        } else if (x === 25 && y === 34  || x === 25 && y === 33 || x === 25 && y ===26 ||
                x === 25 && y === 25) {
                five25.unshift((i + 1));
                console.log(five25);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv25').innerHTML = 'Alineacion: ' + '[ ' + five25 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
   
        } else if (x === 26 && y === 33 || x === 26 && y === 34 || x === 26 && y ===25 ||
                x === 26 && y === 26) {
                five26.unshift((i + 1));
                console.log(five26);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv26').innerHTML = 'Alineacion: ' + '[ ' + five26 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
   
        } else if (x === 27 && y === 21 || x === 27 && y === 22 || x === 27 && y ===28 ||
                x === 27 && y === 27) {                
                five27.unshift((i + 1));
                console.log(five27);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv27').innerHTML = 'Alineacion: ' + '[ ' + five27 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";

        } else if (x === 28 && y === 22 || x === 28 && y === 21 || x === 28 && y ===27 ||
                x === 28 && y === 28) {
                five28.unshift((i + 1));
                console.log(five28);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv28').innerHTML = 'Alineacion: ' + '[ ' + five28 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                               
        } else if (x === 29 && y === 15 || x === 29 && y === 16 || x === 29 && y ===30 ||
                x === 29 && y === 29) { 
                five29.unshift((i + 1));
                console.log(five29);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv29').innerHTML = 'Alineacion: ' + '[ ' + five29 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                             
        } else if (x === 30 && y === 15 || x === 30 && y === 16 || x === 30 && y ===29 ||
                x === 30 && y === 30) {
                five30.unshift((i + 1));
                console.log(five30);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv30').innerHTML = 'Alineacion: ' + '[ ' + five30 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                                     
        } else if (x === 31 && y === 13 || x === 31 && y === 14 || x === 31 && y ===32 ||
                x === 31 && y === 31) {
                five31.unshift((i + 1));
                console.log(five31);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv31').innerHTML = 'Alineacion: ' + '[ ' + five31 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                     
        } else if (x === 32 && y === 14 || x === 32 && y === 13 || x === 32 && y ===31 ||
                x === 32 && y === 25) { 
                five32.unshift((i + 1));
                console.log(five32);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv32').innerHTML = 'Alineacion: ' + '[ ' + five32 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
    
        } else if (x === 33 && y === 26 || x === 33 && y === 25 || x === 33 && y ===34 ||
                x === 33 && y === 33) {
                five33.unshift((i + 1));
                console.log(five33);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv33').innerHTML = 'Alilneacion: ' + '[ ' + five33 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
     
        } else if (x === 34 && y === 25 || x === 34 && y === 26 || x === 34 && y ===33 ||
                x === 34 && y === 34) {
                five34.unshift((i + 1));
                console.log(five34);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv34').innerHTML = 'Alineacion: ' + '[ ' + five34 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                     
        } else if (x === 35 && y === 20 || x === 35 && y === 19 || x === 35 && y ===36 ||
                x === 35 && y === 35) { 
                five35.unshift((i + 1));
                console.log(five35);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv35').innerHTML = 'Alineacion: ' + '[ ' + five35 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                                        
        } else if (x === 36 && y === 19 || x === 36 && y === 20 || x === 36 && y ===35 ||
                x === 36 && y === 36) {
                five36.unshift((i + 1));
                console.log(five36);
                aci = i + 1;
                aus = 0;
                alert("Alineacion en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv36').innerHTML = 'Alineacion: ' + '[ ' + five36 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                  
        } else if (x === 37 && y === 6 || x === 37 && y === 5 || x === 37 && y ===0 ||
                x === 37 && y === 37) { 
                five37.unshift((i + 1));
                console.log(five37);
                aci = i + 1;
                aus = 0;
                alert("Alineacion  en el evento:  " + "[ " + aci + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
                document.getElementById('fiv37').innerHTML = 'Alineacion: ' + '[ ' + five37 + ' ]' + " Sector " + "( " + x + " )" + " " + "( " + y + ")";
                    }
                document.getElementById('rtas').innerHTML = 'Ausencia de factor: ' + '[ ' + aus + ' ]';
                alert("Ausencias de factor " + aus);
                if(aus>1){
                let al=" EVENTOS SIN FACTORIZAR: "+"[ "+aus+" }";
                alert("SIN REGISTROS: " +aus);
                
                }
                aus++;
                x = y;
                if(aus>1){
                alert("Ya es Hora Amigo");
        

                }
                }
                

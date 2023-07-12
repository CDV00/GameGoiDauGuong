


const a11 = document.getElementById("11");
const a12 = document.getElementById("12");
const a13 = document.getElementById("13");

const a21 = document.getElementById("21");
const a22 = document.getElementById("22");
const a23 = document.getElementById("23");

const a31 = document.getElementById("31");
const a32 = document.getElementById("32");
const a33 = document.getElementById("33");


let arrItems = document.querySelectorAll('.item');

//button
const button1 = document.getElementById("numpad-button1");
const button2 = document.getElementById("numpad-button2");
const button3 = document.getElementById("numpad-button3");





const backgroundColorForcus = "#d4e0ff";

const backgroundColorButtonForcus = "#fff89c";

let ElementForcusOld = "";
let ButtonForcusOld = "";

let numpad_buttonForcus=0;



const ChangeBackGroundElement = function(index){
  
    if(numpad_buttonForcus > 0){
        arrItems[index].innerHTML =numpad_buttonForcus;
        if(numpad_buttonForcus != arrItems[index].value)
        arrItems[index].style.color = "red";
        else{
          arrItems[index].style.color = "blue";
        }
    }

    if(ElementForcusOld != ""){
        if(ElementForcusOld == arrItems[index].id)
            return;
        document.getElementById(ElementForcusOld).style.backgroundColor = "";
        ElementForcusOld = arrItems[index].id;
        arrItems[index].style.backgroundColor = backgroundColorForcus;
    }
    else{
        ElementForcusOld = arrItems[index].id;
        arrItems[index].style.backgroundColor = backgroundColorForcus;
    }
        
  };

  const ChangeBackGroundButton = function(){

    numpad_buttonForcus = this.value;


    if(ButtonForcusOld != ""){
        if(ButtonForcusOld == this.id)
            return;
        document.getElementById(ButtonForcusOld).style.backgroundColor = "";
        ButtonForcusOld = this.id;
        this.style.backgroundColor = backgroundColorButtonForcus;
    }
    else{
        ButtonForcusOld = this.id;
        this.style.backgroundColor = backgroundColorButtonForcus;
    }
        
  };

  

  //td.style.backgroundColor = backgroundColorFocus;
  // a11.onclick = ChangeBackGroundElement;
  // a12.onclick = ChangeBackGroundElement;
  // a13.onclick = ChangeBackGroundElement;

  // a21.onclick = ChangeBackGroundElement;
  // a22.onclick = ChangeBackGroundElement;
  // a23.onclick = ChangeBackGroundElement;

  // a31.onclick = ChangeBackGroundElement;
  // a32.onclick = ChangeBackGroundElement;
  // a33.onclick = ChangeBackGroundElement;


  arrItems.forEach((ele,index) => {
      ele.setAttribute("onclick", `ChangeBackGroundElement(${index})`);

  });


  button1.onclick = ChangeBackGroundButton;
  button2.onclick = ChangeBackGroundButton;
  button3.onclick = ChangeBackGroundButton;




  const ganValue = function(elementssss, value){
    elementssss.innerHTML = value;
    elementssss.value = value;
  };

  let array1 = [];
  let array2 = [];
  let array3 = [];

  const randomValue = function(){
    return Math.floor(Math.random() * 3) + 1;
  };
//check value Exist't row 1 
  const randomValueNotExistRow1 = function(){
    let value = randomValue();
    for (let i = 0; i < array1.length; i ++){
        if (array1[i] == value)  {
            value = randomValue();
            i = -1;
        }
    }
    return value;
  };

  //generate row1
  const randomValueArray1 = function(){
    var valueRD1 = randomValue();
    array1[0] = valueRD1;
    ganValue(a11,array1[0]);

    var valueRD2 = randomValueNotExistRow1();
    array1[1] = valueRD2;
    ganValue(a12,array1[1]);

    var valueRD3 = randomValueNotExistRow1();
    array1[2] = valueRD3;
    ganValue(a13,array1[2]);

  };
//check value Exist't row 2 
const randomValueNotExistRow2 = function(index){

    console.log("index111: " + index);

    let countErro = 0;

    let value = randomValue();
    // for (let i = 0; i < array2.length; i ++){
    //     if (index != 0 && array2[i] == value)  {
    //         value = randomValue();
    //         i = -1;
    //     }
    //     else if(i == index && array1[i] == value){
    //         value = randomValue();
    //         i = -1;
    //     }
        
        
    // }
    let i = 0;
    
    if(index == 0 && array1[i] == value){
        value = CheckValueColumn10(randomValue());
    }
    else{
        while(i < array2.length+1){
        
            console.log("i: " + i);
            console.log("index: " + index);
            console.log("value: " + value);
    
            if (array2[i] == value)  {
                value = randomValue();
                i = -1;
            }
            else if(i == index && array1[index] == value){
                console.log("countErro: " + countErro);
                if(countErro == 2){
                    continue;
                }
                value = randomValue();
                countErro = countErro+1;
                i = -1;
            }
            else
                countErro =0;
            i++;
        }
    }



    return value;
  };


  const CheckValueColumn10 = function(value){
    while(array1[0] == value)
        value = randomValue();
    return value;
  }

//generate row2
const randomValueArray2 = function(){
    var valueRD1 = randomValueNotExistRow2(0);
    array2[0] = valueRD1;
    ganValue(a21,array2[0]);

    var valueRD2 = randomValueNotExistRow2(1);
    array2[1] = valueRD2;
    ganValue(a22,array2[1]);

    var valueRD3 = randomValueNotExistRow2(2);
    array2[2] = valueRD3;
    ganValue(a23,array2[2]);

  }



  //check value Exist't row 3 
const randomValueNotExistRow3 = function(index){
    let value = randomValue();
    for (let i = 0; i < array3.length; i ++){
        if (index != 0 && array3[i] == value)  {
            value = randomValue();
            i = -1;
        }
        else if(i == index && (array1[i] == value || array2[i] == value )){
            value = randomValue();
            i = -1;
        }
    }
    return value;
  };

//generate row3
const randomValueArray3 = function(){
    var valueRD1 = randomValueNotExistRow3(0);
    array3[0] = valueRD1;
    ganValue(a31,array3[0]);

    var valueRD2 = randomValueNotExistRow3(1);
    array3[1] = valueRD2;
    ganValue(a32,array3[1]);

    var valueRD3 = randomValueNotExistRow3(2);
    array3[2] = valueRD3;
    ganValue(a33,array3[2]);

  }

  const valueDefault = function(){
    a11.innerHTML = array1[0];
    a11.onclick = null;
    //a22.innerHTML = array2[1];
    //a22.onclick = null;
    //a33.innerHTML = array3[2];
    //a33.onclick = null;
    a13.innerHTML = array1[2];
    a13.onclick = null;
  }
  const getValue = function(row, index, value){
    //debugger;
    let i = 0;
    //let erroCount = 0;
    //let erroValue = 0;
    //let indexOld = 0;
    //let valueErroOld = 0;
    
    if(row == 0){
      while(i<index){
        if(array[row][i] == value){
          value = randomValue();
          i = -1;
        }
        i++;
      }
    }
    else if(row == 1){
      let erroCount = 0;
      let erroValue = 0;
      let indexOld = 0;
      let valueErroOld = 0;

      while(i<index || (index == 0 && i == index)){
        //debugger
        if(array[row][i] == value){
          value = randomValue();
          i = -1;
        }
        else if(array[row-1][index] == value){
          if(indexOld != i){
            erroCount = 0;
            erroValue = 0;
          }else{
            indexOld = i;
          }
          erroCount++;
          valueErroOld = erroValue;
          erroValue = value;
  
          value =randomValue();
          if(erroCount >= 3 && erroValue == valueErroOld)
            return 0;
  
          i = -1;
        }
        i++;
      }
    }else if(row == 2){
      let erroCount = 0;
      let erroValue = 0;
      let indexOld = 0;
      let valueErroOld = 0;

      while(i<index || (index == 0 && i == index)){
        //debugger
        if(array[row][i] == value){
          value = randomValue();
          i = -1;
        }
        else if(array[row-1][index] == value || array[row-2][index] == value){
          if(indexOld != i){
            erroCount = 0;
            erroValue = 0;
          }else{
            indexOld = i;
          }
          erroCount++;
          valueErroOld = erroValue;
          erroValue = value;
  
          value =randomValue();
          if(erroCount >= 3 && erroValue == valueErroOld)
            return 0;
  
          i = -1;
        }
        i++;
      }
    }



    return value;
  }

var array = [[],[],[]];

//console.log(array.length)

const generateValue = function(){
  //debugger
    for(let row = 0; row < array.length; row ++){
        //console.log(array.length)
        for(let column = 0; column < array.length; column ++){
            var value = randomValue();
            
            if(row == 0){
              value= getValue(row, column, value);
              let elm = (row+1)+""+(column+1);
              //document.getElementById(elm).innerHTML = value;
              document.getElementById(elm).value = value;
              array[row][column]=value;
              //index++;
            }
            else if(row==1){
              debugger
              value= getValue(row, column, value);
              if(value == 0){
                array[1][0] = 0;
                array[1][1] = 0;
                array[1][2] = 0;
                console.log("a");
                value = randomValue();
                column = -1;
                continue;
              }
              let elm = (row+1)+""+(column+1);
              //document.getElementById(elm).innerHTML = value;
              document.getElementById(elm).value = value;
              array[row][column]=value;
            }else if(row==2){
              debugger
              value= getValue(row, column, value);
              if(value == 0){
                array[2][0] = 0;
                array[2][1] = 0;
                array[2][2] = 0;
                console.log("a");
                value = randomValue();
                column = -1;
                continue;
              }
              let elm = (row+1)+""+(column+1);
              //document.getElementById(elm).innerHTML = value;
              document.getElementById(elm).value = value;
              array[row][column]=value;
            }



                
        }
    }
};





generateValue();


const randomDefaultValue = function(){
  return Math.floor(Math.random() * 8) + 0;
};
const DefaultValue = function(){
  let value = randomDefaultValue;
  
}

let arrayDf = ["11","12","13","21","22","23","31","32","33"];

const generateDefautValue = function(numper){
  let o1 = randomDefaultValue();
  let o2 = randomDefaultValue();
  while(o1 == o2)
    o2 = randomDefaultValue();
  let o3 = randomDefaultValue();
  while(o3 == o2 || o3 == o1)
    o3 = randomDefaultValue();

  let o4 = randomDefaultValue();
  while(o4 == o2 || o4 == o1 || o4 == o3)
    o4 = randomDefaultValue();

  //document.getElementById(o1).innerHTML = array[(parseInt(item.slice(0, 1)-1))][(item.slice(1, item.length)-1)];
  document.getElementById(arrayDf[o1]).innerHTML = document.getElementById(arrayDf[o1]).value;
  document.getElementById(arrayDf[o1]).onclick = null;
  document.getElementById(arrayDf[o2]).innerHTML = document.getElementById(arrayDf[o2]).value;
  document.getElementById(arrayDf[o2]).onclick = null;
  document.getElementById(arrayDf[o3]).innerHTML = document.getElementById(arrayDf[o3]).value;
  document.getElementById(arrayDf[o3]).onclick = null;
  document.getElementById(arrayDf[o4]).innerHTML = document.getElementById(arrayDf[o4]).value;
  document.getElementById(arrayDf[o4]).onclick = null;


}

generateDefautValue();




  //randomValueArray1();
  //randomValueArray2();
  //randomValueArray3();
  //valueDefault();


  
  
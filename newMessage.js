function randomNumber(num){
   return Math.floor(Math.random() * num);
}


const value ={
    viewValue1 : ['Hi', 'Hello', 'Hey'],
    viewValue2 : ['How are you?', 'How was your day', 'Hope you are doing good'],
    viewValue3 : ['Thanks for your time', 'See you soon']
};
let pushValue= [];

for(let rel in value){
let newIndex1 = randomNumber(value[rel].length);

switch(rel){
    case 'viewValue1':
        pushValue.push('This is the message you got'+ value[rel][newIndex1]);
        break;
    case 'viewValue2':
        pushValue.push('This is the 2nd message you got' + value[rel][newIndex1]);
        break;
    case 'viewValue3':
        pushValue.push('This is the 3rd message you got' + value[rel][newIndex1]);
        break;
    default:
        pushValue.push('Value is not enough');
        break;
}
}

function formatValue(pushValue){
    const finalMessage = pushValue.join('\n');
    console.log(finalMessage);
}

formatValue(pushValue);
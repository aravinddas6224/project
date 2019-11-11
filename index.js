function generate()
{
outputa1 = Math.random();
outputs1 = outputa1*6;
output1 = Math.floor(outputs1)+1;

outputa2 = Math.random();
outputs2 = outputa2*6;
output2 = Math.floor(outputs2)+1;

switch(output1)
{
    case 1: document.querySelector('.dice .img1').setAttribute('src','images/dice1.png');
    break;
    case 2: document.querySelector('.dice .img1').setAttribute('src','images/dice2.png');
    break;
    case 3: document.querySelector('.dice .img1').setAttribute('src','images/dice3.png');
    break;
    case 4: document.querySelector('.dice .img1').setAttribute('src','images/dice4.png');
    break;
    case 5: document.querySelector('.dice .img1').setAttribute('src','images/dice5.png');
    break;
    case 6: document.querySelector('.dice .img1').setAttribute('src','images/dice6.png');
    break;
    
}

switch(output2)
{
    case 1: document.querySelector('.dice .img2').setAttribute('src','images/dice1.png');
    break;
    case 2: document.querySelector('.dice .img2').setAttribute('src','images/dice2.png');
    break;
    case 3: document.querySelector('.dice .img2').setAttribute('src','images/dice3.png');
    break;
    case 4: document.querySelector('.dice .img2').setAttribute('src','images/dice4.png');
    break;
    case 5: document.querySelector('.dice .img2').setAttribute('src','images/dice5.png');
    break;
    case 6: document.querySelector('.dice .img2').setAttribute('src','images/dice6.png');
    break;
    
}

output2 = Math.random();
output2 = output2*6;
output2 = Math.floor(output2)+1;

if( output1 > output2)
{
    document.querySelector('h1').innerHTML = "player 1 wins";
}
else{
    document.querySelector('h1').innerHTML = "player 2 wins";
}

}
const buttonList = document.getElementsByTagName('button');
const show = document.querySelector('.show');
const result = document.querySelector('.result');

var op = '';
var num = ''; 
var answer = 0;
let stack = [];

for (let i = 0; i < buttonList.length; i++) {

    buttonList[i].addEventListener('click', () => {
        
        if (isNaN(buttonList[i].value) && 
        buttonList[i].value != 'clear' &&
        buttonList[i].value != 'remove') {
            op = buttonList[i].value;
            num = 0;
        } else if (!isNaN(buttonList[i].value)) {
            if (show.innerHTML.length > 0) {
                if (!isNaN(show.innerHTML.charAt(show.innerHTML.length-1))) {
                    num += buttonList[i].value;
                    // console.log(show.innerHTML.charAt(show.innerHTML.length-1));
                } else {
                    num = buttonList[i].value;
                }
            } else {
                num = buttonList[i].value;
            }
            
        }

        num = +num;
        answer = +answer;
        
        console.log(num)

        show.innerHTML += buttonList[i].value;

        if (buttonList[i].value == 'clear') {
            show.innerHTML = '';
            result.innerHTML = 0;
            op = '';
            num = 0;
            answer = 0;
            stack = [];
        }

        if (isNaN(show.innerHTML.charAt(show.innerHTML.length-2)) &&
            isNaN(buttonList[i].value)) {
                show.innerHTML = show.innerHTML.substring(0, show.innerHTML.length-2) + buttonList[i].value;
        }
        
        if (buttonList[i].className != 'submit' && !isNaN(buttonList[i].value)) {
            
           

            if (op == '+') {
                
                answer += num;
                
                
                if (show.innerHTML.length > 0)
                    stack.push(answer - num);
            
            } else if (op == '-') {
                answer -= num;
                
                if (show.innerHTML.length > 1)
                    stack.push(answer + num);
                
            } else if (op == 'x') {
                
                if (stack.length == 0) {
                    answer *= num;
                } else {
                    var temp = answer - stack[stack.length-1];
                    
                    temp *= num;
                    
                    answer = stack[stack.length-1] + temp;
                }
                
            } else if (op == '/') {
                
                if (stack.length == 0) {
                    answer /= num;
                } else {
                    var temp = answer - stack[stack.length-1];
                    
                    temp /= num;
                    
                    answer = stack[stack.length-1] + temp;
                }
                
            } else {
                answer = num;
            } 


        } else if (buttonList[i].className == 'submit') {
            result.innerHTML = answer;
            // op = '+';
            // num = 0;
            // answer = 0;
            // stack = [];
        }

        // console.log(answer);


    });
}

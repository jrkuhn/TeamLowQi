//Team Low-Qi Calculator

var Calc = {};
Calc.log = [];


//Controller
$(document).ready(function() {
    Calc.init();



    $('body').click(function(e){
        var action = e.target.id;

        switch(action){
            case 'plus1':
                break;
            case 'minus1':
                break;
            case 'plus2':
                break;
            case 'minus2':
                break;
            case 'LP1':
                $('#pop1').show();
                break;
            case 'LP2':
                $('#pop2').show();
                break;
            case 'reset':
                alert("reset");
                Calc.lp1 = 8000;
                Calc.lp2 = 8000;
                Calc.temp1 = 0;
                Calc.temp2 = 0;
                break;
            case 'coin':
                alert("coin");
                break;
            case 'dice':
                alert("dice");
                break;
            case 'close1':
                $('#pop1').hide();
                break;
            case 'close2':
                $('#pop2').hide();
                break;

            case 'pop1num1':
                break;
            case 'pop1num2':
                break;
            case 'pop1num3':
                break;
            case 'pop1num4':
                break;
            case 'pop1num5':
                break;
            case 'pop1num6':
                break;
            case 'pop1num7':
                break;
            case 'pop1num8':
                break;
            case 'pop1num9':
                break;
            case 'pop1num0':
                break;
            case 'enter1':
                break;

            case 'pop2num1':
                break;
            case 'pop2num2':
                break;
            case 'pop2num3':
                break;
            case 'pop2num4':
                break;
            case 'pop2num5':
                break;
            case 'pop2num6':
                break;
            case 'pop2num7':
                break;
            case 'pop2num8':
                break;
            case 'pop2num9':
                break;
            case 'pop2num0':
                break;
            case 'enter2':
                break;
            case 'pop1':
                break;
            case 'pop2':
                break;

            default:
                $('#pop1').hide();
                $('#pop2').hide();
                Calc.temp1 = 0;
                Calc.temp2 = 0;
        }

    });

});


Calc.init = function(){
    Calc.lp1 = 8000;
    Calc.lp2 = 8000;

    Calc.p1total = 0;
    Calc.p1First = 0;
    Calc.p1Second = 0;

    Calc.p2First = 0;
    Calc.p2Second = 0;

};

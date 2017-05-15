//Team Low-Qi Calculator

var Calc = {};

Calc.log = [];


//Controller
$(document).ready(function() {
    Calc.init();

    Calc.LP1 = $("#LP1").html();
    Calc.LP2 = $("#LP2").html();
    Calc.T1 = $("#temp1").html();
    Calc.T2 = $("#temp2").html();

    $('body').on('click touch', function(e){
        var action = e.target.id;
        var num1 = parseInt($('#temp1').html());
        var num2 = parseInt($('#temp2').html());

        switch(action){
            case 'plus1':
                var numT1 = parseInt($('#temp1').html());
                var LP1 = parseInt($('#LP1').html());
                if(numT1 >= 0)
                    $('#LP1').html(LP1 + numT1);
                if(LP1 + numT1 > 9999) {
                    $('#LP1').css('font-size', 46);
                    $('#LP1').css({"padding":"24px "});
                }
                $('#pop1').hide();
                $('#temp1').html("");
                break;

            case 'minus1':
                var numT1 = parseInt($('#temp1').html());
                var LP1 = parseInt($('#LP1').html());
                if(numT1 >= 0)
                    $('#LP1').html(LP1 - numT1);

                if(LP1 - numT1 < 0)
                    $('#LP1').html(0);

                $('#pop1').hide();
                $('#temp1').html("");
                break;

            case 'plus2':
                var numT2 = parseInt($('#temp2').html());
                var LP2 = parseInt($('#LP2').html());
                if(numT2 >= 0)
                    $('#LP2').html(LP2 + numT2);
                if(LP2 + numT2 > 9999) {
                    $('#LP2').css('font-size', 46);
                    $('#LP2').css({"padding": "24px "});
                }
                $('#pop2').hide();
                $('#temp2').html("");
                break;

            case 'minus2':
                var numT2 = parseInt($('#temp2').html());
                var LP2 = parseInt($('#LP2').html());
                if(numT2 >= 0)
                    $('#LP2').html(LP2 - numT2);

                if(LP2 - numT2 < 0)
                    $('#LP2').html(0);

                $('#pop2').hide();
                $('#temp2').html("");
                break;

            case 'LP1':
                $('#pop1').show();
                $('#pop2').hide();
                break;

            case 'LP2':
                $('#pop2').show();
                $('#pop1').hide();
                break;
            case 'reset':
                $('#LP1').html(8000);
                $('#LP2').html(8000);
                $('#temp1').html("");
                $('#temp2').html("");
                break;

            case 'coin':
                rand = Math.floor(Math.random() * (2))+1;
                if(rand == 2)
                    alert("TAILS");
                else
                    alert("HEADS");
                break;

            case 'dice':
                rand = Math.floor(Math.random() * (6))+1;
                alert(rand);
                break;

            case 'close1':
                $('#pop1').hide();
                $('#temp1').html("");
                break;

            case 'close2':
                $('#pop2').hide();
                $('#temp2').html("");
                break;

            case 'pop1num1':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num1").value);
                break;
            case 'pop1num2':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num2").value);
                break;
            case 'pop1num3':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num3").value);
                break;
            case 'pop1num4':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num4").value);
                break;
            case 'pop1num5':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num5").value);
                break;
            case 'pop1num6':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num6").value);
                break;
            case 'pop1num7':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num7").value);
                break;
            case 'pop1num8':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num8").value);
                break;
            case 'pop1num9':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num9").value);
                break;
            case 'pop1num0':
                $('#temp1').html( $('#temp1').html() + document.getElementById("pop1num0").value);
                break;

            case 'pop2num1':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num1").value);
                break;
            case 'pop2num2':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num2").value);
                break;
            case 'pop2num3':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num3").value);
                break;
            case 'pop2num4':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num4").value);
                break;
            case 'pop2num5':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num5").value);
                break;
            case 'pop2num6':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num6").value);
                break;
            case 'pop2num7':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num7").value);
                break;
            case 'pop2num8':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num8").value);
                break;
            case 'pop2num9':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num9").value);
                break;
            case 'pop2num0':
                $('#temp2').html( $('#temp2').html() + document.getElementById("pop2num0").value);
                break;

            case 'pop1':
                break;
            case 'pop2':
                break;
            case 'temp1':
                break;
            case 'temp2':
                break;

            default:
                $('#pop1').hide();
                $('#pop2').hide();
                $('#temp1').html("");
                $('#temp2').html("");
        }

    });

});


Calc.init = function(){


};

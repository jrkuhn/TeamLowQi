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

    $('body').click(function(e){
        var action = e.target.id;

        switch(action){
            case 'plus1':
                var T1 = $('#temp1');
                var numT1 = parseInt(T1.html());
                var LP1 = $('#LP1');
                var LP = parseInt(LP1.html());

                if(numT1 >= 1)
                    LP1.html(LP + numT1);
                if(LP + numT1 > 9999) {
                    LP1.css('font-size', 46);
                    LP1.css({"padding":"24px "});
                }
                $('#pop1').hide();
                T1.html("");
                break;

            case 'minus1':
                var T1 = $('#temp1');
                var numT1 = parseInt(T1.html());
                var LP1 = $('#LP1');
                var LP = parseInt(LP1.html());
                if(numT1 >= 1)
                    LP1.html(LP - numT1);

                if(LP - numT1 < 0)
                    LP1.html(0);

                $('#pop1').hide();
                T1.html("");
                break;

            case 'plus2':
                var T2 = $('#temp2');
                var numT2 = parseInt(T2.html());
                var LP2 = $('#LP2');
                var LP = parseInt(LP2.html());
                if(numT2 >= 0)
                    LP2.html(LP + numT2);
                if(LP + numT2 > 9999) {
                    LP2.css('font-size', 46);
                    LP2.css({"padding": "24px "});
                }
                $('#pop2').hide();
                T2.html("");
                break;

            case 'minus2':
                var T2 = $('#temp2');
                var numT2 = parseInt(T2.html());
                var LP2 = $('#LP2');
                var LP = parseInt(LP2.html());
                if(numT2 >= 0)
                    LP2.html(LP - numT2);

                if(LP - numT2 < 0)
                    LP2.html(0);

                $('#pop2').hide();
                T2.html("");
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
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num1").value);
                break;
            case 'pop1num2':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num2").value);
                break;
            case 'pop1num3':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num3").value);
                break;
            case 'pop1num4':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num4").value);
                break;
            case 'pop1num5':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num5").value);
                break;
            case 'pop1num6':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num6").value);
                break;
            case 'pop1num7':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num7").value);
                break;
            case 'pop1num8':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num8").value);
                break;
            case 'pop1num9':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num9").value);
                break;
            case 'pop1num0':
                var T1 = $('#temp1');
                T1.html( T1.html() + document.getElementById("pop1num0").value);
                break;

            case 'pop2num1':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num1").value);
                break;
            case 'pop2num2':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num2").value);
                break;
            case 'pop2num3':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num3").value);
                break;
            case 'pop2num4':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num4").value);
                break;
            case 'pop2num5':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num5").value);
                break;
            case 'pop2num6':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num6").value);
                break;
            case 'pop2num7':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num7").value);
                break;
            case 'pop2num8':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num8").value);
                break;
            case 'pop2num9':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num9").value);
                break;
            case 'pop2num0':
                var T2 = $('#temp2');
                T2.html( T2.html() + document.getElementById("pop2num0").value);
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

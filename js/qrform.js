function display_qr(v) 
{
//    <img id="qrimage" src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=Hello%20world"/>
    var src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="+v;
    $("#qrimage").attr("src",src);
}

function on_key_press()
{
    var str1=$('#username').val();
    var str2=$('#password').val();
    var str3=$('#acc_password').val();

    var str=str1+'|'+str2+'|'+str3;
    display_qr(str);	    
}

$(document).ready( function()
{
    $('.qrform_input').keypress( 
	function() 
	{
	    on_key_press();
	});
});

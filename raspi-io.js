var val;
function io(cmd, arg1, arg2)
{
	if(cmd == "mode" || cmd == "write" || cmd == "pwm")
	{
		var iourl = "raspi-io.php?1=" + cmd + "&2=" + arg1 + "&3=" + arg2;
	}
	else if(cmd == "read")
	{
		var iourl = "raspi-io.php?1=read&2=" + arg1;
	}
	$.ajax({url:iourl}).done(function(data){val = data;});
	return val;
}

var gpio = 
{
    mode : function (pin, mode){return io("mode", pin, mode);},
	write : function (pin, state){return io("write", pin, state);},
	pwm : function (pin, state){return io("pwm", pin, state);},
	read : function (pin){return io("read", pin);},
	test : function (){return 2}
};
cake = gpio.read(25);
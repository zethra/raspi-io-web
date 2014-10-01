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
	$.ajax({url:iourl}).done(function(data)
	{
		if (data == "1")
		{
			val = true;
		}
		else if (data == "0")
		{
			val = false;
		}
	});
	return val;
}
var gpio = 
{
    mode : function (pin, mode)
	{
		return io("mode", pin, mode);
	},
	write : function (pin, state)
	{
		return io("write", pin, state);
	},
	pwm : function (pin, state)
	{
		return io("pwm", pin, state);
	},
	read : function (pin)
	{
		return io("read", pin);
	},
	readall : function ()
	{
		for (x = 1; x = 25; x++)
		{
			console.log("pin " + x + ": " + gpio.read(x));
		}
	}
};
cake = gpio.read(25);
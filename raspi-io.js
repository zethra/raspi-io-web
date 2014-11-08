var val;
var elements = [];
var attributes = [];
var pins = [];
var oncolors = [];
var offcolors = [];
var pos = 0;
function io(cmd, arg1, arg2)
{
	if(cmd == "mode" || cmd == "pwm")
	{
		var iourl = "raspi-io.php?1=" + cmd + "&2=" + arg1 + "&3=" + arg2;
	}
	if(cmd == "write")
	{
		if (arg2 == true)
		{
			arg2 = "1";
		}
		else if (arg2 == false)
		{
			arg2 = "0";
		}
		console.log(arg2);
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
		for (x = 1; x <= 25; x++)
		{
			console.log("pin " + x + ": " + gpio.read(x));
		}
	},
	toggle : function (pin)
	{
		gpio.write(pin, !(gpio.read(pin)))
	},
	ui:
	{
		set : function (element, attribute, pin, oncolor, offcolor)
		{
			if (element instanceof Array)
			{
				if(pin instanceof Array)
				{
					for (x in element)
					{
						elements[pos] = element[x];
						attributes[pos] = attribute;
						pins[pos] = pin[x];
						oncolors[pos] = oncolor;
						offcolors[pos] = offcolor;
						pos++;
					}
				}
				else
				{
					for (x in element)
					{
						elements[pos] = element[x];
						attributes[pos] = attribute;
						pins[pos] = pin;
						oncolors[pos] = oncolor;
						offcolors[pos] = offcolor;
						pos++;
					}
				}
			}
			else
			{
				elements[pos] = element;
				attributes[pos] = attribute;
				pins[pos] = pin;
				oncolors[pos] = oncolor;
				offcolors[pos] = offcolor;
				pos++;
			}
		},
		
		update : function ()
		{
			for (x in elements)
			{
				if (gpio.read(pins[x]))
				{
					$(elements[x]).css(attributes[x], oncolors[x]);
				}
				else
				{
					$(elements[x]).css(attributes[x], offcolors[x]);
				}
			}
		}
	}
};
cake = gpio.read(25);
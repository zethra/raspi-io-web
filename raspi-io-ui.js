 var on = "#F3A514";
var off = "#ffffff"

var elements = [];
var attributes = [];
var pins = [];
var oncolors = [];
var offcolors = [];
var pos = 0;

gpio.ui =
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

//console.log(gpio.read(25));
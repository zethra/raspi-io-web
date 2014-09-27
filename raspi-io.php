<?php

$arg1 = $_GET['1'];
$arg2 = $_GET['2'];
$arg3 = $_GET['3'];

if($arg1 == "mode")
{
	if($arg3 == "in")
	{
		try
		{
			exec('gpio mode ' . $arg2 . ' in');
		}
		catch(Exception $e)
		{
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}
	elseif($arg3 == "out")
	{
		try
		{
			exec('gpio mode ' . $arg2 . ' out', $status);
		}
		catch(Exception $e)
		{
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}
	elseif($arg3 == "pwm")
	{
		try
		{
			exec('gpio mode ' . $arg2 . ' pwm');
		}
		catch(Exception $e)
		{
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}
	else
	{
		echo 'invalid mode';
	}
}
elseif($arg1 == "write")
{
	try
	{
		exec('gpio write ' . $arg2 . ' ' . $arg3);
	}
	catch(Exception $e)
	{
		echo 'Caught exception: ',  $e->getMessage(), "\n";
	}
}
elseif($arg1 == "read")
{
	try
	{
		exec('gpio read ' . $arg2, $status);
		echo $status[0];
	}
	catch(Exception $e)
	{
		echo 'Caught exception: ',  $e->getMessage(), "\n";
	}
}
elseif($arg1 == "pwm")
{
	try
	{
		exec('gpio pwm ' . $arg2 . ' ' . $arg3);
	}
	catch(Exception $e)
	{
		echo 'Caught exception: ',  $e->getMessage(), "\n";
	}
}
else
{
	echo "Error command not recongnized";
}
?>
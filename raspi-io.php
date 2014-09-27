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
			echo exec('gpio mode ' . $arg2 . ' in');
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
			echo exec('gpio mode ' . $arg2 . ' out');
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
			echo exec('gpio mode ' . $arg2 . ' pwm');
		}
		catch(Exception $e)
		{
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}
}
elseif($arg1 == "write")
{
	try
	{
		echo exec('gpio write ' . $arg2 . ' ' . $arg3);
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
		echo exec('gpio read' . $arg2);
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
		echo exec('gpio pwm ' . $arg2 . ' ' . $arg3);
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
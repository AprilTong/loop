// JavaScript Document
function sport(obj,prop,end)
{
	clearInterval(obj.timer);
	var speed=0;
	var val=0;
	obj.timer=setInterval(function()
	{
		if(prop=='opacity')
		{
			val=Math.round(cssStyle(obj,prop)*100);	
		}else
		{
			val=cssStyle(obj,prop);	
		}
		
		speed=(end-val)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(val==end)
		{
			clearInterval(obj.timer);
		}else
		{
			if(prop=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(val+speed)+')';
				obj.style.opacity=(val+speed)/100;
			}else
			{
				cssStyle(obj,prop,val+speed);
			}
		}
	},30);
}
function cssStyle(obj,prop,value)
{
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		{
			return parseFloat(obj.currentStyle[prop]);
		}else
		{
			return parseFloat(getComputedStyle(obj,false)[prop]);
		}
	}else
	{
		return obj.style[prop]=value+'px';	
	}
}
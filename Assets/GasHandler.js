#pragma strict
public var time_to_blow:float = 20;
private var recogedor:GameObject;
private var grabbed:int = 0;
function Start () {
	
}

function Update () {
	if(grabbed==1) //si esta recogido
	{
	
	}
}


function setGrabbed(recoge_by:GameObject)
{
	grabbed = 1;
	recogedor = recoge_by;
}
#pragma strict
public var gol_rival:int=0;
public var gol_amigo:int=0;

public var buf_rival:int=0;
public var buf_amigo:int=0;

function Start () {
	
}

function Update () {
	var valoooor:float;
	valoooor = Random.value;
	if(valoooor >= 0.9)
	{
	 	gol_rival++;
	 	buf_rival=1;
	}
	else
	{
		gol_amigo++;
		buf_amigo=1;
	}
	
	gameObject.GetComponentInChildren(GUIText).guiText.text=gol_rival.ToString()+"-"+gol_amigo.ToString();
}
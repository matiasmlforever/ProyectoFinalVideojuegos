#pragma strict
//public var erdeltatiempo:float;
//public var ertiempo:float;
public var aceleracion:float=1;

public var minutos:int=0;
public var segundos:int=0;
public var segundos_totales:int=0;

function Start () {

}

function Update () {
	//segundos_totales++;
	segundos = segundos + aceleracion* Mathf.CeilToInt(Time.deltaTime);
	//erdeltatiempo = Time.deltaTime;
	//ertiempo = Time.timeSinceLevelLoad;
	//minutos = Mathf.FloorToInt((ertiempo/60) * aceleracion);
	//segundos = Mathf.FloorToInt(ertiempo - (minutos * 60));
	
	//segundos_totales = Mathf.FloorToInt(aceleracion*(segundos_totales - (minutos * 60)));
	if(segundos >= 60)// && minutos!=0)
	{
		segundos = 0;	
		minutos++;
	}
	
	//segundos = Mathf.FloorToInt(segundos_totales - (minutos * 60));
	Debug.Log(gameObject.GetComponentInChildren(GUIText));
	
	gameObject.GetComponentInChildren(GUIText).guiText.text=minutos.ToString()+":"+segundos.ToString();
}
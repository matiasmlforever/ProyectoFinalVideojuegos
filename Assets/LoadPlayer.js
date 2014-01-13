#pragma strict

public var jugador1_prefab: GameObject;
public var jugador2_prefab: GameObject;

function Start () {

	if(PlayerPrefs.GetInt("pj") != 0)
	{
		if(PlayerPrefs.GetInt("pj") == 1)
		{
			//carga 3d chileno
			GameObject.Instantiate(jugador1_prefab,transform.position,transform.rotation);
		}
		
		if(PlayerPrefs.GetInt("pj") == 2)
		{
			//carga waton
			GameObject.Instantiate(jugador2_prefab,transform.position,transform.rotation);
			
		}
	}
	else //por mientras, para poder probar el stage sin tener que empezar en el menu principal siempre ... por defecto usa el  player1
		GameObject.Instantiate(jugador1_prefab,transform.position,transform.rotation);
}

function Update () {

}
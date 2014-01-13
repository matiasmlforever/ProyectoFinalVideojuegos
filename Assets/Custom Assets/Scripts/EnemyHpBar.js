#pragma strict

var target : Transform; 
var cam : Camera;
var Jugador: GameObject;

function Start () {
	while(true)
	{
		//reviso e instancio el objeto jugador
		Jugador = GameObject.FindGameObjectWithTag("Player"); //Debug.Log("El jugador es: " + Jugador);		
		cam = Jugador.transform.FindChild("GameCamera").camera;
		if(Jugador != null) break;
	}
}

function Update () 
{ 
	if(target != null)
	{
	var wantedPos = cam.WorldToViewportPoint (target.position); 
  	transform.position = wantedPos; 	
	}
  
}

function DestroyBar()
{
	//Debug.Log("Destruyendo Barra " + GetInstanceID());
	Destroy(gameObject);
}
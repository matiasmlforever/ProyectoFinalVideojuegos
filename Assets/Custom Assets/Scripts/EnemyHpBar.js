#pragma strict

var target : Transform; 
var cam : Camera;
var Jugador: GameObject;

function Start () {
	Debug.Log("Se crea Barra " + GetInstanceID());
}

function Update () 
{ 
	if(!Jugador){
		Jugador = GameObject.FindGameObjectWithTag("Player");
		cam = Jugador.transform.FindChild("GameCamera").camera;
	}

	if(target != null)
	{
	var wantedPos = cam.WorldToViewportPoint (target.position); 
  	transform.position = wantedPos; 	
	}
  
}

function DestroyBar()
{
	Debug.Log("Destruyendo Barra " + GetInstanceID());
	Destroy(gameObject);
}
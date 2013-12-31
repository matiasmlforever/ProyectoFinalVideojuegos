#pragma strict

var target : Transform; 
var cam : Camera;

function Start () {
	var cam = GameObject.Find("GameCamera");
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
	Debug.Log("Destruyendo Barra " + GetInstanceID());
	Destroy(gameObject);
}
#pragma strict
public var personaje:Transform;

function Start () {

}

function Update () {
	transform.position.x = personaje.position.x;//sigue en el eje X	

	if(Input.GetKey(KeyCode.Escape))
		Application.LoadLevel("MainMenu");
}
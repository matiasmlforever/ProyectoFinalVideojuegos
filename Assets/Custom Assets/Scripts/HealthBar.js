// healthBar.js by http://www.Gameobject.net
#pragma strict
var energyBar : GUIStyle ;
 
var bgImage : Texture2D; //color dañado
var fgImage : Texture2D; //color original
static var playerEnergy = 100; 
var gameOver : boolean = false;

//sonido
var itemSound:AudioClip;
 
function Start() {
	playerEnergy = 98;
}
 
function Update() {
	if(Input.GetKey(KeyCode.Z))
		playerEnergy -= 1 ;

	if(Input.GetKey(KeyCode.X))
		playerEnergy -= 10 ;
}
 
function changeHP(amount:int){
	var tempEnergy = playerEnergy + amount;

	if(tempEnergy > 100)
		playerEnergy = 100;
	else if (tempEnergy < 1)
		playerEnergy = 0;
	else
		playerEnergy = tempEnergy;

	AudioSource.PlayClipAtPoint(itemSound, transform.position);
	Debug.Log("Modificando vida en ("+amount+")");	

}

function OnGUI () {
	if(gameOver == false && playerEnergy <= 0)
	{
		gameOver = true; 
		Debug.Log("PERDISTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
		Time.timeScale = 0;
	}

	if(gameOver)
		if(GUI.Button(Rect(Screen.width/3 + 10, Screen.height/3 + 90, Screen.width/3 - 20, 40), "¡PERDISTE!"))
			Application.LoadLevel("MainMenu");

	// Create one Group to contain both images , the first two numbers define the on screen placement
	GUI.Label(Rect(10, 50, 256, 32), "Jugador (" + playerEnergy + "/" + 100 + ")");
	GUI.BeginGroup (Rect (10,10,256,32));
	 
		// Draw the background image
		GUI.Box (Rect (0,0,256,32), bgImage, energyBar);
		 
		// Create a second Group which will be clipped
		// We want to clip the image and not scale it, which is why we need the second Group
		GUI.BeginGroup (Rect (0,0, playerEnergy/100.0 * 256, 32));
		 
			// Draw the foreground image
			GUI.Box (Rect (0,0,256,32), fgImage, energyBar);
		 
		// End both Groups
		GUI.EndGroup ();
	GUI.EndGroup ();
}
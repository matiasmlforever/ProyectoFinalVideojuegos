// healthBar.js by http://www.Gameobject.net
#pragma strict
var energyBar : GUIStyle ;
 
var bgImage : Texture2D; // background image that is 256 x 32 rojo
var fgImage : Texture2D; // foreground image that is 256 x 32
static var playerEnergy = 1.0; // a float between 0.0 and 1.0
 
function Start() {
	playerEnergy = 1.0;
}
 
function Update() {
	if(Input.GetKey(KeyCode.Z))
		playerEnergy -= 0.001 ;
	if(Input.GetKey(KeyCode.X))
		playerEnergy -= 0.01 ;
}
 
function OnGUI () {
	if(playerEnergy <= 0)
		{
			Debug.Log("PERDISTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
			
			if(GUI.Button(Rect(Screen.width/3 + 10, Screen.height/3 + 90, Screen.width/3 - 20, 40), "¡PERDISTE!"))
				Application.LoadLevel("MainMenu");
			Time.timeScale = 0;
			audio.Pause();
		}

	// Create one Group to contain both images , the first two numbers define the on screen placement
	GUI.Label(Rect(10, 50, 256, 32), "Jugador (" + playerEnergy * 100 + "/" + 100 + ")");
	GUI.BeginGroup (Rect (10,10,256,32));
	 
		// Draw the background image
		GUI.Box (Rect (0,0,256,32), bgImage, energyBar);

		 
		// Create a second Group which will be clipped
		// We want to clip the image and not scale it, which is why we need the second Group
		GUI.BeginGroup (Rect (0,0,playerEnergy * 256, 32));
		 
			// Draw the foreground image
			GUI.Box (Rect (0,0,256,32), fgImage, energyBar);
		 
		// End both Groups
		GUI.EndGroup ();
	GUI.EndGroup ();
}
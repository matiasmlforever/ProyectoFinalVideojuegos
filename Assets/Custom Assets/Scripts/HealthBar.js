// healthBar.js by http://www.Gameobject.net
#pragma strict
var energyBar : GUIStyle ;
 
var bgImage : Texture2D; //color dañado
var fgImage : Texture2D; //color original

static var playerEnergy = 100; 
static var playerMoney = 1000; 

var gameOver : boolean = false;
var kills : int = 0;

//sonido
var itemSound:AudioClip;
var coinsSound:AudioClip;
var lostSound:AudioClip;
 
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
	Debug.Log("Modificando vida en (" + amount + ")");	

}

function changeMoney(amount:int)
{
	var tempMoney = playerMoney + amount;
	playerMoney = tempMoney;
	AudioSource.PlayClipAtPoint(coinsSound, transform.position);
	Debug.Log("Modificando dinero en (" + amount + ")");	
}

function OnGUI () {
	if(gameOver == false && playerEnergy <= 0)
	{
		gameOver = true; 
		AudioSource.PlayClipAtPoint(lostSound, transform.position);
		Debug.Log("PERDISTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
		Time.timeScale = 0;
	}

	if(gameOver)
		if(GUI.Button(Rect(Screen.width/3 + 10, Screen.height/3 + 90, Screen.width/3 - 20, 40), "¡PERDISTE!"))
			Application.LoadLevel("MainMenu");
	
	GUI.Label(Rect(10, 50, 256, 32), "Jugador (" + playerEnergy + "/" + 100 + ")"); // Conteo vida restante en números
	GUI.Label(Rect(10, 80, 256, 32), "Kills: " + kills); //conteo de cantidad de enemigos muertos
	GUI.Label(Rect(10, 110, 256, 32), "Dinero: $" + playerMoney); //conteo de dinero

	GUI.BeginGroup (Rect (10,10,256,32));	 		
		GUI.Box (Rect (0,0,256,32), bgImage, energyBar); //barra roja	de fondo 
		GUI.BeginGroup (Rect (0,0, playerEnergy/100.0 * 256, 32));		 			
			GUI.Box (Rect (0,0,256,32), fgImage, energyBar); //barra verde de vida
		GUI.EndGroup ();
	GUI.EndGroup ();
}
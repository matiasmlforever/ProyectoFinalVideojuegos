#pragma strict

public var personaje:Transform;

private var savedTimeScale:float;
private var isOnPause:boolean = false;

function Start () {

}

function Update () {
	transform.position.x = personaje.position.x;//sigue en el eje X	
	
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		if(isOnPause)
			UnPauseGame();
		else
			PauseGame();
	}
		
}

function UnPauseGame(){
	Debug.Log("Juego Resumido");
	Time.timeScale = savedTimeScale;
	audio.Play();
	isOnPause = false;
}

function PauseGame(){
	Debug.Log("Juego Pausado");
	savedTimeScale = Time.timeScale;
	Time.timeScale = 0;
	audio.Pause();
	isOnPause = true;
}

function OnGUI () {

	if (isOnPause) {
		GUI.Box(Rect(Screen.width/3, Screen.height/3, Screen.width/3, Screen.height/3), "Juego en pausa");

		if (GUI.Button(Rect(Screen.width/3 + 10, Screen.height/3 + 40, Screen.width/3 - 20, 40), "Continuar jugando")) {
			UnPauseGame();
		}

		if (GUI.Button(Rect(Screen.width/3 + 10, Screen.height/3 + 90, Screen.width/3 - 20, 40), "Reiniciar Stage")) {
			UnPauseGame();
			Application.LoadLevel(Application.loadedLevel);
		}

		if (GUI.Button(Rect(Screen.width/3 + 10, Screen.height/3 + 140, Screen.width/3 - 20, 40), "Salir")) {
			UnPauseGame();
			Application.LoadLevel("MainMenu");
		}
		
	}	
}
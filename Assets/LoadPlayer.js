﻿#pragma strict

public var jugador1_prefab: GameObject;
//public var jugador2_prefab: GameObject;
var dialogStyle : GUIStyle;

private var player : GameObject;
private var playerStats : GameObject;
private var playerStatsScript : HealthBar;
private var dialogTime:float; 

function Start () {
	/*
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
	*/
	
	GameObject.Instantiate(jugador1_prefab,transform.position,transform.rotation);
	
	player = GameObject.FindGameObjectWithTag("Player");
	playerStats = GameObject.Find("HealthBar");	
	playerStatsScript = playerStats.GetComponent(HealthBar);
	dialogTime = 0;
}

function Update () {

}

function OnGUI () {
	var currentHp = playerStatsScript.playerEnergy;
	var currentMoney = playerStatsScript.playerMoney;
	var timeOnStage = Time.timeSinceLevelLoad;

	if(!player)
		player = GameObject.FindGameObjectWithTag("Player");


	var playerCoords = player.transform.position;

	var initText = "Debes llegar al estadio antes de que comience el partido!\n La entrada cuesta $10.000 así que deberás recolectar dinero en el camino derrotando a los demás hinchas que se dirigen al estadio.";
	
	var damageText = "Te han hecho daño! Para recuperar tus puntos de vida busca las esferas verdes que te entregan energía.";
	var damageAlert = true;

	var playerCoordsLog = "(" + playerCoords.x + ", " + playerCoords.y + ", " + playerCoords.z + ")";
	
	if(timeOnStage < 7){

		GUI.Box(Rect (10, Screen.height - 100, Screen.width - 20, 100 -10), initText , dialogStyle);	
	}		
	else if(currentHp < 100 && damageAlert && dialogTime < 500){

		GUI.Box(Rect (10, Screen.height - 100, Screen.width - 20, 100 -10), damageText , dialogStyle);
		if(dialogTime > 500){
			resetDialogTime();
			damageAlert = false;
		}
		else			
			dialogTime += 1;
	}
	else if(playerCoords.x > 1210 && playerCoords.x < 1430 && playerCoords.z > -4820 && playerCoords.z < -4770){	
		GUI.Box(Rect (10, Screen.height - 100, Screen.width - 20, 100 -10), "¡Bienvenido a la plaza!", dialogStyle);
	}
	else if(playerCoords.x > 1096 && playerCoords.x < 1145 && playerCoords.z > -4774 && playerCoords.z < -4724){	
		GUI.Box(Rect (10, Screen.height - 100, Screen.width - 20, 100 -10), "Al parecer esta calle no tiene salida :/", dialogStyle);
	}
	else if(playerCoords.x > 1637 && playerCoords.x < 1652 && playerCoords.z > -4684 && playerCoords.z < -4654){	
		if(currentMoney < 10000){
			var moneyText = "Hey! La entrada al estadio cuesta $10000 y tú solo tienes " + currentMoney + "\nQuizás deberías ir a darte unas vueltas más.";
			GUI.Box(Rect (10, Screen.height - 100, Screen.width - 20, 100 -10), moneyText , dialogStyle);
			}			
		else{
			dialogStyle.alignment = TextAnchor.UpperCenter;
			dialogStyle.padding.top = 30;

			GUI.Box(Rect (10, Screen.height/2, Screen.width - 20, 170 -10), "Felicitaciones! Es hora del partido! ", dialogStyle);
			if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 + 70 , 170, 40), "Entrar al estadio"))
				Application.LoadLevel("Stage02_Estadio");
		} 
			
	}
	

	//GUI.Box(Rect (Screen.width - 210, 10, 200, 50), playerCoordsLog);	
}


function resetDialogTime(){
	dialogTime = 0;
}

#pragma strict
 
// define and create our GUI delegate
var currentGUIMethod : Function;
// GUIStyle para título de cada submenu y textos dentro de submenus
var centeredText : GUIStyle;
var titleStyle : GUIStyle;

// Altura por defecto de cada submenu
var boxHeight = 400;
// Desde donde comienza el box de cada submenu
var paddingLeft = Screen.width/3;

var gameIcon : Texture2D;
//directional keys imgs
var aKey : Texture2D;
var dKey : Texture2D;
var wKey : Texture2D;
var sKey : Texture2D;
var spaceKey : Texture2D;
//punch keys imgs
var uKey : Texture2D;
var iKey : Texture2D;
//kick keys imgs
var jKey : Texture2D;
var kKey : Texture2D;
//block and down
var yKey : Texture2D;
var hKey : Texture2D;

var menuOptions = new String[4];
var selectedOption:int = 0;

function Start ()
{   
    menuOptions[0] = "Jugar";
    menuOptions[1] = "Controles";
    menuOptions[2] = "Créditos";
    menuOptions[3] = "Salir";

    selectedOption = 0;

    this.currentGUIMethod = MainMenu; // primera llamada a MainMenu con todas las opciones
}

function OnGUI ()
{
    titleStyle = new GUIStyle(GUI.skin.box); //scar el GUIStyle por defecto del box y después modificarlo
    titleStyle.fontSize = 30;
    this.currentGUIMethod();
}
 
function MainMenu()
{		
    var a = "De " + selectedOption;

    if(Input.GetKeyUp(KeyCode.DownArrow)){
        if(selectedOption < 3)
            selectedOption += 1;
    }

    if(Input.GetKeyUp(KeyCode.UpArrow)){
        if(selectedOption > 0)
            selectedOption -= 1;
    } 
    print(a + " a " + selectedOption);

    //GUI.Box(Rect (Screen.width - 210, 10, 200, 50), "Selected: " + selectedOption + " ----- " + menuOptions[selectedOption]);

	var acumV = 200;
	GUI.Box(Rect (paddingLeft - 10, 10, paddingLeft + 20, boxHeight), "Bienvenido el juego NerdLES", titleStyle);
	GUI.DrawTexture( Rect(paddingLeft + 140, 70, 100 , 100), gameIcon);

    GUI.SetNextControlName (menuOptions[0]);
    if (GUI.Button(Rect(paddingLeft, acumV, paddingLeft,40), "Jugar"))
    {
        Debug.Log ("Comenzar juego");	
        this.currentGUIMethod = PlayMenu;
    }
    
    acumV += 50;
    GUI.SetNextControlName (menuOptions[1]);
    if (GUI.Button(Rect(paddingLeft, acumV, paddingLeft, 40), "Controles"))
    {
        Debug.Log ("Mostrar controles");	
        this.currentGUIMethod = ControlsMenu;
    }

    acumV += 50;

    GUI.SetNextControlName (menuOptions[2]);
    if (GUI.Button(Rect(paddingLeft, acumV, paddingLeft, 40), "Créditos"))
    {
        Debug.Log ("Mostrar créditos");	
        this.currentGUIMethod = CreditsMenu;
    }

    acumV += 50;
    GUI.SetNextControlName (menuOptions[3]);
    if (GUI.Button(Rect(paddingLeft, boxHeight - 40, paddingLeft, 40), "Salir"))
    {
        Debug.Log ("Saliendo del juego");	
        Application.Quit();
    }

    GUI.FocusControl(menuOptions[selectedOption]);
}
 
function PlayMenu()
{
	GUI.Box(Rect (paddingLeft - 10, 10, paddingLeft + 20,boxHeight), "Comenzar a jugar", titleStyle);
		var acumV = 200;		

    if (GUI.Button (Rect(paddingLeft, acumV, paddingLeft,40), "Empezar Stage 1"))
    {        
        Application.LoadLevel("Stage01_Calle");
        //Application.LoadLevel("CharSelect");
    }
    
    if (GUI.Button (Rect(paddingLeft, acumV + 60, paddingLeft,40), "Empezar Stage 2"))
    {        
        //Application.LoadLevel("Stage01_Calle");
        Application.LoadLevel("Stage02_Estadio");
    }

    acumV += 50;

    if (GUI.Button (Rect(paddingLeft, boxHeight - 40, paddingLeft,40), "Volver a menú principal"))
    {
        // go back to the main menu
        this.currentGUIMethod = MainMenu;
    }
}   

function ControlsMenu()
{
		var acumV = 100;
        boxHeight = 500;

        centeredText.fontSize = 15;
        centeredText.normal.textColor = Color.white; 
        centeredText.alignment = TextAnchor.MiddleLeft;

		GUI.Box(Rect (paddingLeft - 10, 10, paddingLeft + 20, boxHeight), "Controles", titleStyle);

        GUI.DrawTexture(Rect(paddingLeft + 10, acumV, 40, 40), aKey);
        GUI.DrawTexture(Rect(paddingLeft + 10 + 50, acumV, 40, 40), dKey);
        GUI.Label (Rect (paddingLeft + 220, acumV, 200, 40), "Avanzar o retroceder ", centeredText); 
        acumV += 50;

        GUI.DrawTexture(Rect(paddingLeft + 10, acumV, 40, 40), wKey);
        GUI.DrawTexture(Rect(paddingLeft + 10 + 50, acumV, 40, 40), sKey);
        GUI.Label (Rect (paddingLeft + 220, acumV, 200, 40), "Desplazarse en profundidad ", centeredText);
        acumV += 50;

        GUI.DrawTexture(Rect(paddingLeft + 10, acumV, 40, 40), uKey);
        GUI.Label (Rect (paddingLeft + 220, acumV, 200, 40), "Golpe puño ", centeredText);
        acumV += 50;

        GUI.DrawTexture(Rect(paddingLeft + 10, acumV, 40, 40), jKey);
        GUI.Label (Rect (paddingLeft + 220, acumV, 200, 40), "Golpe patada ", centeredText);
        acumV += 50;

        GUI.DrawTexture(Rect(paddingLeft + 10, acumV, 40, 40), yKey);
        GUI.Label (Rect (paddingLeft + 220, acumV, 200, 40), "Cubrirse o bloquear golpes ", centeredText);
        acumV += 50;

        GUI.DrawTexture(Rect(paddingLeft + 10, acumV, 200, 40), spaceKey);
        GUI.Label (Rect (paddingLeft + 220, acumV, 200, 40), "Saltar ", centeredText);
                
        acumV += 50;

    if (GUI.Button (Rect(paddingLeft, boxHeight - 40, paddingLeft,40), "Volver a menú principal"))
    {
        // go back to the main menu
        this.currentGUIMethod = MainMenu;
    }
}   

function CreditsMenu()
{
    var acumV = 100;
    centeredText.fontSize = 45;
    centeredText.normal.textColor = Color.white; 
    centeredText.alignment = TextAnchor.UpperCenter;

    GUI.Box(Rect (paddingLeft - 10, 10, paddingLeft + 20,boxHeight), "Créditos", titleStyle);

    GUI.Label (Rect (paddingLeft, acumV, paddingLeft, 40), "Matías Lecaros ", centeredText); 
    acumV += 50;
    GUI.Label (Rect (paddingLeft, acumV, paddingLeft, 40), "Franco Cravero ", centeredText);
    acumV += 50;
    GUI.Label (Rect (paddingLeft, acumV, paddingLeft, 40), "Jaime Covarrubias ", centeredText);
    acumV += 50;

    if (GUI.Button (Rect(paddingLeft, boxHeight - 40, paddingLeft, 40), "Volver a menú principal"))
    {
        // go back to the main menu
        this.currentGUIMethod = MainMenu;
    }


}   
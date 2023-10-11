using UnityEngine;

public class MainMenu : MonoBehaviour
{
    // Define and create our GUI delegate
    private System.Action currentGUIMethod;
    private GUIStyle centeredText;
    private GUIStyle titleStyle;
    private int boxHeight = 400;
    private float paddingLeft;
    private string[] menuOptions;
    private int selectedOption;
    public Texture2D gameIcon;
    public Texture2D aKey, dKey, wKey, sKey, spaceKey, uKey, iKey, jKey, kKey, yKey, hKey;

    void Start()
    {
        menuOptions = new string[4];
        menuOptions[0] = "Jugar";
        menuOptions[1] = "Controles";
        menuOptions[2] = "Créditos";
        menuOptions[3] = "Salir";
        selectedOption = 0;
        currentGUIMethod = MainMenuScreen;
    }

    void OnGUI()
    {
        titleStyle = new GUIStyle(GUI.skin.box);
        titleStyle.fontSize = 30;
        currentGUIMethod();
    }

    void MainMenuScreen()
    {
        if (Input.GetKeyUp(KeyCode.DownArrow) && selectedOption < 3)
        {
            selectedOption += 1;
        }

        if (Input.GetKeyUp(KeyCode.UpArrow) && selectedOption > 0)
        {
            selectedOption -= 1;
        }

        GUILayout.BeginArea(new Rect(paddingLeft - 10, 10, paddingLeft + 20, boxHeight));
        GUILayout.Box("Bienvenido al juego NerdLES", titleStyle);
        GUILayout.BeginHorizontal();
        GUILayout.Label("", GUILayout.Width(140));
        GUILayout.Box(gameIcon, GUILayout.Width(100), GUILayout.Height(100));
        GUILayout.EndHorizontal();

        if (GUILayout.Button("Jugar"))
        {
            Debug.Log("Comenzar juego");
            currentGUIMethod = PlayMenuScreen;
        }

        if (GUILayout.Button("Controles"))
        {
            Debug.Log("Mostrar controles");
            currentGUIMethod = ControlsMenuScreen;
        }

        if (GUILayout.Button("Créditos"))
        {
            Debug.Log("Mostrar créditos");
            currentGUIMethod = CreditsMenuScreen;
        }

        if (GUILayout.Button("Salir"))
        {
            Debug.Log("Saliendo del juego");
            Application.Quit();
        }
        GUILayout.EndArea();
    }

    void PlayMenuScreen()
    {
        GUILayout.BeginArea(new Rect(paddingLeft - 10, 10, paddingLeft + 20, boxHeight));
        GUILayout.Box("Comenzar a jugar", titleStyle);

        if (GUILayout.Button("Empezar Stage 1"))
        {
            Application.LoadLevel("Stage01_Calle");
        }

        if (GUILayout.Button("Volver a menú principal"))
        {
            currentGUIMethod = MainMenuScreen;
        }
        GUILayout.EndArea();
    }

    void ControlsMenuScreen()
    {
        GUILayout.BeginArea(new Rect(paddingLeft - 10, 10, paddingLeft + 20, boxHeight));
        GUILayout.Box("Controles", titleStyle);

        GUILayout.BeginHorizontal();
        GUILayout.Label(aKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label(dKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label("Avanzar o retroceder", centeredText);
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label(wKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label(sKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label("Desplazarse en profundidad", centeredText);
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label(uKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label("Golpe puño", centeredText);
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label(jKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label("Golpe patada", centeredText);
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label(yKey, GUILayout.Width(40), GUILayout.Height(40));
        GUILayout.Label("Cubrirse o bloquear golpes", centeredText);
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label(spaceKey, GUILayout.Width(200), GUILayout.Height(40));
        GUILayout.Label("Saltar", centeredText);
        GUILayout.EndHorizontal();

        if (GUILayout.Button("Volver a menú principal"))
        {
            currentGUIMethod = MainMenuScreen;
        }
        GUILayout.EndArea();
    }

    void CreditsMenuScreen()
    {
        GUILayout.BeginArea(new Rect(paddingLeft - 10, 10, paddingLeft + 20, boxHeight));
        GUILayout.Box("Créditos", titleStyle);

        GUILayout.Label("Matías Lecaros", centeredText);
        GUILayout.Label("Franco Cravero", centeredText);
        GUILayout.Label("Jaime Covarrubias", centeredText);

        if (GUILayout.Button("Volver a menú principal"))
        {
            currentGUIMethod = MainMenuScreen;
        }
        GUILayout.EndArea();
    }
}

using UnityEngine;

public class HealthBar : MonoBehaviour
{
    public GUIStyle energyBar;
    public Texture2D bgImage; // damaged color
    public Texture2D fgImage; // original color

    public static int playerEnergy = 100;
    public static int playerMoney = 1000;

    public bool gameOver = false;
    public int kills = 0;

    // Sound
    public AudioClip itemSound;
    public AudioClip coinsSound;
    public AudioClip lostSound;
    public AudioClip damageSound;

    private void Start()
    {
        playerEnergy = 100;
    }

    private void Update()
    {
        if (Input.GetKey(KeyCode.Z))
            ChangeHP(-1);

        if (Input.GetKey(KeyCode.X))
            ChangeHP(-10);
    }

    private void ChangeHP(int amount)
    {
        int tempEnergy = playerEnergy + amount;

        if (tempEnergy > 100)
            playerEnergy = 100;
        else if (tempEnergy < 1)
            playerEnergy = 0;
        else
            playerEnergy = tempEnergy;

        if (amount > 0)
            AudioSource.PlayClipAtPoint(itemSound, transform.position);
        else
            AudioSource.PlayClipAtPoint(damageSound, transform.position);

        Debug.Log("Modificando vida en (" + amount + ")");
    }

    public void ChangeMoney(int amount)
    {
        int tempMoney = playerMoney + amount;
        playerMoney = tempMoney;
        AudioSource.PlayClipAtPoint(coinsSound, transform.position);
        // Debug.Log("Modificando dinero en (" + amount + ")");
    }

    private void OnGUI()
    {
        if (gameOver == false && playerEnergy <= 0)
        {
            gameOver = true;
            AudioSource.PlayClipAtPoint(lostSound, transform.position);
            Debug.Log("PERDISTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            Time.timeScale = 0;
        }

        if (gameOver)
        {
            if (GUI.Button(new Rect(Screen.width / 3 + 10, Screen.height / 3 + 90, Screen.width / 3 - 20, 40),
                    "¡PERDISTE!"))
                Application.LoadLevel("MainMenu");
        }

        GUI.Label(new Rect(10, 50, 256, 32),
            "Jugador (" + playerEnergy + "/" + 100 + ")"); // Remaining life count in numbers
        GUI.Label(new Rect(10, 80, 256, 32), "Kills: " + kills); // Count of killed enemies
        GUI.Label(new Rect(10, 110, 256, 32), "Dinero: $" + playerMoney); // Money count

        GUI.BeginGroup(new Rect(10, 10, 256, 32));
        GUI.Box(new Rect(0, 0, 256, 32), bgImage, energyBar); // Red background bar
        GUI.BeginGroup(new Rect(0, 0, playerEnergy / 100.0f * 256, 32);
        GUI.Box(new Rect(0, 0, 256, 32), fgImage, energyBar); // Green life bar
        GUI.EndGroup();
        GUI.EndGroup();
    }
}
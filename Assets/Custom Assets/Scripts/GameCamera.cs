using UnityEngine;

public class GameCamera : MonoBehaviour
{
    public Transform personaje;

    private float savedTimeScale = 1.0f;
    private bool isOnPause = false;

    private void Start()
    {
        UnPauseGame();
    }

    private void Update()
    {
        transform.position = new Vector3(personaje.position.x, transform.position.y, transform.position.z); // sigue en el eje X

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (isOnPause)
                UnPauseGame();
            else
                PauseGame();
        }
    }

    private void UnPauseGame()
    {
        Debug.Log("Juego Resumido");
        Time.timeScale = savedTimeScale;
        GetComponent<AudioSource>().Play();
        isOnPause = false;
    }

    private void PauseGame()
    {
        Debug.Log("Juego Pausado");
        savedTimeScale = Time.timeScale;
        Time.timeScale = 0;
        GetComponent<AudioSource>().Pause();
        isOnPause = true;
    }

    private void OnGUI()
    {
        if (isOnPause)
        {
            GUI.Box(new Rect(Screen.width / 3, Screen.height / 3, Screen.width / 3, Screen.height / 3), "Juego en pausa");

            if (GUI.Button(new Rect(Screen.width / 3 + 10, Screen.height / 3 + 40, Screen.width / 3 - 20, 40), "Continuar jugando"))
            {
                UnPauseGame();
            }

            if (GUI.Button(new Rect(Screen.width / 3 + 10, Screen.height / 3 + 90, Screen.width / 3 - 20, 40), "Reiniciar Stage"))
            {
                UnPauseGame();
                UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
            }

            if (GUI.Button(new Rect(Screen.width / 3 + 10, Screen.height / 3 + 140, Screen.width / 3 - 20, 40), "Salir"))
            {
                UnPauseGame();
                UnityEngine.SceneManagement.SceneManager.LoadScene("MainMenu");
            }
        }
    }
}
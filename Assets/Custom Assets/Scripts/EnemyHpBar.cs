using UnityEngine;

public class EnemyHpBar : MonoBehaviour
{
    public Transform target;
    public Camera cam;
    public GameObject Jugador;

    private void Start()
    {
        Debug.Log("Se crea Barra " + GetInstanceID());
    }

    private void Update()
    {
        if (!Jugador)
        {
            Jugador = GameObject.FindGameObjectWithTag("Player");
            cam = Jugador.transform.Find("GameCamera").GetComponent<Camera>();
        }

        if (target != null)
        {
            Vector3 wantedPos = cam.WorldToViewportPoint(target.position);
            transform.position = wantedPos;
        }
    }

    public void DestroyBar()
    {
        Debug.Log("Destruyendo Barra " + GetInstanceID());
        Destroy(gameObject);
    }
}

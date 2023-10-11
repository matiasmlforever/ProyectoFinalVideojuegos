using UnityEngine;

public class EnemyAttack2 : MonoBehaviour
{
    public float fuerza_punio;
    public float fuerza_patada;
    public float raycast_distance;
    private PlayerStatsHandler enemigo_receptor;
    private EnemyMovement personaje;
    public float coolDownPeriodInSeconds;
    private float timeStamp;
    public GameObject player1;

    void Start()
    {
        timeStamp = Time.time + coolDownPeriodInSeconds;
        coolDownPeriodInSeconds = 0.3f;
    }

    void Update()
    {
        Vector3 lugar_origen = new Vector3(transform.position.x, transform.position.y, transform.position.z);

        if (!player1)
        {
            player1 = GameObject.FindGameObjectWithTag("Player");
        }

        // Debug.Log(player1.transform.position.x.ToString());
        if ((1 < Mathf.Abs(player1.transform.position.x - transform.position.x) &&
             8 > Mathf.Abs(player1.transform.position.x - transform.position.x)) &&
            1 > Mathf.Abs(player1.transform.position.z - transform.position.z))
        {
            if (timeStamp <= Time.time)
            {
                timeStamp = Time.time + coolDownPeriodInSeconds;
                Debug.Log("Enemigo lanza golpe");

                RaycastHit hit_punio;
                Vector3 lugar_origen_alto = new Vector3(transform.position.x, transform.position.y, transform.position.z);

                if (Physics.Raycast(lugar_origen_alto, (transform.localScale.x) * Vector3.left, out hit_punio, raycast_distance))
                {
                    if (hit_punio.collider.CompareTag("Player"))
                    {
                        Debug.Log("Enemigo golpea a " + hit_punio.collider.gameObject.name + " con fuerza [[[ " + fuerza_punio + " ]]");
                        var hpObject = GameObject.Find("HealthBar");
                        var hp = hpObject.GetComponent<HealthBar>();
                        hp.changeHP(-fuerza_punio);
                    }
                }
            }
        }
    }
}

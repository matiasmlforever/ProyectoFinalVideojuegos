using UnityEngine;

public class Combat : MonoBehaviour
{
    public float fuerza_punio;
    public float fuerza_patada;
    public float raycast_distance;
    public float low_offset = 0;
    public float high_offset = 0;
    public int isCrouching = 0;

    private EnemyStatsHandler enemigo_receptor;
    private EnemyStatsHandler2 enemigo_receptor2;
    private PlayerMovement personaje;

    // Sounds
    public AudioClip punchSound;
    public AudioClip punch2Sound;
    public AudioClip kickSound;
    public AudioClip kick2Sound;

    private void Start()
    {

    }

    private void Update()
    {
        personaje = gameObject.GetComponent<PlayerMovement>();

        if (!personaje.blocking)
        {
            // INICIO DE PUÑETAZO
            if (Input.GetKeyDown(KeyCode.U))
            {
                int r_o_l_punch = 0;

                if (Input.GetKeyDown(KeyCode.U))
                {
                    r_o_l_punch = 1; // LEFT
                    AudioSource.PlayClipAtPoint(punchSound, transform.position); // hacer sonar golpe puño
                }

                RaycastHit hit_punio;

                Vector3 lugar_origen_alto = new Vector3(transform.position.x, transform.position.y + high_offset, transform.position.z);

                if (Physics.Raycast(lugar_origen_alto, (transform.localScale.x) * Vector3.left, out hit_punio, raycast_distance))
                {
                    if (hit_punio.rigidbody != null && (hit_punio.collider.tag == "golpeable"))
                    {
                        hit_punio.rigidbody.AddForceAtPosition((transform.localScale.x) * Vector3.left * fuerza_punio, hit_punio.point);

                        enemigo_receptor = hit_punio.collider.gameObject.GetComponent<EnemyStatsHandler>();
                        if (enemigo_receptor == null)
                        {
                            enemigo_receptor2 = hit_punio.collider.gameObject.GetComponent<EnemyStatsHandler2>();
                            enemigo_receptor2.TakeHit((int)fuerza_punio, r_o_l_punch, hit_punio.point);
                        }
                        else
                        {
                            enemigo_receptor.TakeHit((int)fuerza_punio, r_o_l_punch, hit_punio.point);
                        }
                    }
                }
            } // FIN DE PUÑETAZO

            // INICIO PATADAS
            if (Input.GetKeyDown(KeyCode.J))
            {
                int r_o_l_kick = 0;

                if (Input.GetKeyDown(KeyCode.J))
                {
                    r_o_l_kick = 1; // LEFT
                    AudioSource.PlayClipAtPoint(kickSound, transform.position); // hacer sonar golpe patada
                }

                RaycastHit hit_kick;
                Vector3 lugar_origen_low = new Vector3(transform.position.x, transform.position.y - low_offset, transform.position.z);

                if (Physics.Raycast(lugar_origen_low, (transform.localScale.x) * Vector3.left, out hit_kick, raycast_distance))
                {
                    if (hit_kick.rigidbody != null && (hit_kick.collider.tag == "golpeable"))
                    {
                        hit_kick.rigidbody.AddForceAtPosition((transform.localScale.x) * Vector3.left * fuerza_patada, hit_kick.point);

                        enemigo_receptor = hit_kick.collider.gameObject.GetComponent<EnemyStatsHandler>();
                        if (enemigo_receptor == null)
                        {
                            enemigo_receptor2 = hit_kick.collider.gameObject.GetComponent<EnemyStatsHandler2>();
                            enemigo_receptor2.TakeHit((int)fuerza_patada, r_o_l_kick, hit_kick.point);
                        }
                        else
                        {
                            enemigo_receptor.TakeHit((int)fuerza_patada, r_o_l_kick, hit_kick.point);
                        }
                    }
                }
            } // FIN PATADAS
        }
        else
        {
            Debug.Log("NO PUEDE GOLPEAR, ESTA BLOQUEANDO");
        }
    }
}

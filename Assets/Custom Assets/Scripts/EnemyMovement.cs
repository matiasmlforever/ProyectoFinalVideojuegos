using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    public bool facingLeft = true;
    public bool agachado = false;
    public GameObject player1;
    public GameObject togo;
    public int i;
    public GameObject barra; // This should be where Script B goes
    private EnemyHpBar la;

    // Speed in units per sec.
    public float speed;
    public float x2;
    public int flag1 = 1;

    private void Start()
    {
        x2 = transform.position.x;

        i = 1;
        togo = GameObject.Find("togo" + i);

        Transform curTransform = gameObject.GetComponent<Transform>();
    }

    private void Update()
    {
        if (!player1)
        {
            player1 = GameObject.FindGameObjectWithTag("Player");
            //barra = gameObject.GetComponent<EnemyStatsHandler>().getHpBar(); 
            //barra.target = transform;
        }

        // verifica que enemyspawn es
        if (transform.position.z > -4600)
        {
            i = 5;
            togo = GameObject.Find("togo" + i);
        }

        // The step size is equal to speed times frame time.
        float step = speed * Time.deltaTime;

        EnemyStatsHandler other = gameObject.GetComponent<EnemyStatsHandler>();

        // si la vida esta llena camina tranquilo
        if (other.Lleno())
        {
            // si llega al punto correspondiente
            if (Vector3.Distance(togo.transform.position, transform.position) < 2.0)
            {
                Debug.Log(gameObject + " llego a " + i);
                if (i == 6)
                { // si llega al togo6 se destruye
                    //barra.DestroyBar();
                    Destroy(gameObject);
                }
                i++; // pasa al siguiente punto
                togo = GameObject.Find("togo" + i);
            }

            if (gameObject != null && togo != null)
            {
                transform.position = Vector3.MoveTowards(transform.position, togo.transform.position, step);
            }
        }
        // si le pegaron
        else
        {
            // Debug.Log("enemigo esta dañado");
            // Move our position a step closer to the target.
            if (6 > Mathf.Abs(player1.transform.position.x - transform.position.x) && 1 > Mathf.Abs(player1.transform.position.z - transform.position.z))
            {
                // Do nothing if the player is too close.
            }
            else
            {
                transform.position = Vector3.MoveTowards(transform.position, player1.transform.position, step);
                float x1 = transform.position.x;
                if (x2 > x1)
                {
                    transform.localScale = new Vector3(1, transform.localScale.y, transform.localScale.z);
                    x2 = transform.position.x;
                }
                else
                {
                    transform.localScale = new Vector3(-1, transform.localScale.y, transform.localScale.z);
                    x2 = transform.position.x;
                }
            } /*GIRA EL SPRITE*/
        }
    }
}

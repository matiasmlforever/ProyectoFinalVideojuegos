using UnityEngine;

public class EnemyMovement2 : MonoBehaviour
{
    // This script moves the character controller forward 
    // and sideways based on the arrow keys.
    // It also jumps when pressing space.
    // Make sure to attach a character controller to the same game object.
    // It is recommended that you make only one call to Move or SimpleMove per frame.

    public bool facingLeft = true;
    public bool agachado = false;
    public GameObject player1;
    public GameObject togo;
    public int i;
    public GameObject barra;

    // Speed in units per sec.
    public float speed;
    public float x2;
    public int flag1;

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
        }

        // The step size is equal to speed times frame time.
        float step = speed * Time.deltaTime;

        EnemyStatsHandler other = gameObject.GetComponent<EnemyStatsHandler>();

        /*
        // si la vida esta llena camina tranquilo
        if (other.lleno())
        {
            // si llega al punto correspondiente
            if (Vector3.Distance(togo.transform.position, transform.position) < 2.0)
            {
                Debug.Log("llego a " + i);
                if (i == 6)
                { // si llega al togo6 se destrulle
                    //barra.DestroyBar();
                    Destroy(gameObject);
                }
                i++; // pasa al siguiente punto
                togo = GameObject.Find("togo" + i);
            }
            if (gameObject != null && togo != null) transform.position = Vector3.MoveTowards(transform.position, togo.transform.position, step);
        }
        */

        // si le pegaron
        //else
        //{
        //    Debug.Log("enemigo esta dañado");
        // Move our position a step closer to the target.
        if (6 > Mathf.Abs(player1.transform.position.x - transform.position.x) && 1 > Mathf.Abs(player1.transform.position.z - transform.position.z))
        {
            
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
        } /* GIRA EL SPRITE */
        // }
    }
}

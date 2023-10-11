using UnityEngine;

public class EnemySpawn : MonoBehaviour
{
    public GameObject enemy;
    public GameObject player1;
    public GameObject player2;

    // Minimum time to wait before spawning a random object (in seconds)
    public float min_wait_time = 5;

    // Maximum time to wait before spawning a random object (in seconds)
    public float max_wait_time = 15;

    public bool start_spawn = true;

    void Start()
    {
        /*// Instantiate the object at the position and rotation of this transform
        GameObject clone;
        clone = Instantiate(enemy, transform.position, transform.rotation);*/
    }

    void Update()
    {
        GameObject clone;

        if (start_spawn)
        {
            if (Random.Range(0, 250) == 1)
            {
                clone = Instantiate(enemy, transform.position, transform.rotation);
            }
        }
    }
}
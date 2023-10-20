using UnityEngine;

public class Coins : MonoBehaviour
{
    public int amount = 400;
    private GameObject hpObject;

    void Start()
    {
        // Initialization code, if needed.
    }

    void Update()
    {
        // Update code, if needed.
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Player"))
        {
            // If the player collects the coins
            hpObject = GameObject.Find("HealthBar");

            // Assuming HealthBar is a component of hpObject
            HealthBar stats = hpObject.GetComponent<HealthBar>();

            if (stats != null)
            {
                stats.ChangeMoney(amount);
            }

            Destroy(gameObject);
        }
    }
}
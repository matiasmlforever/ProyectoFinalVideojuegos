using UnityEngine;

public class Heal : MonoBehaviour
{
    private PlayerStatsHandler receptor;
    public int heal_amount = 500;

    void Start()
    {
    }

    void Update()
    {
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Player"))
        {
            // Heal the player
            receptor = other.GetComponent<PlayerStatsHandler>();
            receptor.Heal(heal_amount);
            Destroy(gameObject);
        }
    }
}
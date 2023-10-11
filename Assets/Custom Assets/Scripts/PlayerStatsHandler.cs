using UnityEngine;

public class PlayerStatsHandler : MonoBehaviour
{
    public GameObject HPBAR;
    public int max_hp;
    public int current_hp;
    public int armor;
    private float escala_local_barra = 1;
    private PlayerMovement player_moves;

    void Start()
    {
        current_hp = max_hp;
        HPBAR.GetComponent<GUIText>().text = gameObject.name; // Change identifier in the GUI
    }

    void Update()
    {
        HPBAR.transform.localScale = new Vector3(escala_local_barra, 1, 1);

        if (current_hp <= 0)
        {
            // If health drops below 0, destroy the player and HPBAR
            Destroy(gameObject);
            Destroy(HPBAR);
        }
    }

    public void takeHit(float fuerza, Vector3 punto_impacto)
    {
        player_moves = gameObject.GetComponent<PlayerMovement>();

        float result_damage = fuerza - armor;
        float high_low_modifier = 1;

        // Distinguish the height at which the player receives the hit
        if (punto_impacto.y > transform.localPosition.y)
        {
            // It's a high hit
        }
        else
        {
            // It's a low hit
        }

        // If the player is blocking, reduce the damage by 5%
        if (player_moves.blocking)
        {
            result_damage *= 0.05f;
        }

        if (result_damage <= 0)
        {
            result_damage = 0;
        }

        // Deduct the impact from the player's HP
        float hit_proportion = result_damage / max_hp;
        escala_local_barra = HPBAR.transform.localScale.x + (hit_proportion * 0.5f);

        current_hp -= (int)result_damage;
        
        if (current_hp <= 0)
        {
            current_hp = 0;
            // The player has lost all health
        }
    }

    public int getCurrentHP()
    {
        return current_hp;
    }

    public void heal(int amount)
    {
        float heal_proportion = amount / max_hp;
        escala_local_barra = HPBAR.transform.localScale.x + (heal_proportion * 0.5f);
        current_hp += amount;
        
        if (current_hp > max_hp)
        {
            current_hp = max_hp;
        }
    }
}

using UnityEngine;

public class EnemyStatsHandler2 : MonoBehaviour
{
    public int max_hp = 100;
    public int current_hp;
    public int armor;
    public int coinProbability = 50;
    private float escala_local_barra = 1;

    private GameObject enemyHpBar;
    private GameObject hpbar;
    private EnemyHpBar la;
    private SpriteRenderer sprite;

    private float changeTime;

    public AudioClip[] painSound;

    void Start()
    {
        current_hp = max_hp;

        GameObject cam = GameObject.Find("GameCamera"); // To make the health bar follow the enemy on the screen
        enemyHpBar = GameObject.Find("EnemyHpBar");
        hpbar = enemyHpBar;
        la = hpbar.GetComponent<EnemyHpBar>();

        sprite = gameObject.GetComponentInChildren<SpriteRenderer>(); // To change color when hit
    }

    public EnemyHpBar GetHpBar()
    {
        return la;
    }

    void Update()
    {
        if (current_hp <= 0)
        {
            GameObject.Find("HealthBar").GetComponent<HealthBar>().kills++; // Increase the kill count in the stats
            AudioSource.PlayClipAtPoint(painSound[Random.Range(0, painSound.Length)], transform.position); // Play death sound

            Destroy(gameObject);

            /*var leaveCoin = Random.Range(0, 100);
            if (leaveCoin <= coinProbability)
            {
                var coinsObject = GameObject.Find("Coins");
                var a = transform.rotation;
                a.y = 180;
                var coins = Instantiate(coinsObject, transform.position, a);
            }*/
        }

        if (sprite.color == Color.red && (Time.time - changeTime) > 0.1)
        {
            sprite.color = Color.black;
        }
    }

    public void TakeHit(int fuerza, int r_o_l, Vector3 punto_impacto)
    {
        sprite.color = Color.red;

        var high_low_modifier = 1;
        var debugMsg = Time.deltaTime + ") Enemigo recibe golpe ";

        if (punto_impacto.y > transform.localPosition.y)
        {
            debugMsg += " ALTO";
        }
        else
        {
            debugMsg += " BAJO";
        }

        debugMsg += "[ " + current_hp + " -> ";

        current_hp = current_hp - (fuerza - armor);

        debugMsg += current_hp + " ]";

        if (hpbar)
        {
            Debug.Log("Commented out guitTexture.pixelInset");
            //hpbar.guiTexture.pixelInset = new Rect(-50, -60, current_hp, 8);
        }


        // Debug.Log(debugMsg);
    }

    public int GetCurrentHP()
    {
        return current_hp;
    }

    public void Heal(int amount)
    {
        current_hp = current_hp + amount;
    }

    public bool Lleno()
    {
        return current_hp == max_hp;
    }
}

using UnityEngine;

public class EnemyStatsHandler : MonoBehaviour
{
    public GameObject enemyHpBar;
    public int max_hp = 100;
    public int current_hp;
    public int armor;
    public int coinProbability = 50;
    private float escala_local_barra = 1;

    private EnemyHpBar la;
    private SpriteRenderer sprite;

    private float changeTime;
    
    public AudioClip[] painSound;

    private void Start()
    {
        current_hp = max_hp;

        GameObject cam = GameObject.Find("GameCamera");
        enemyHpBar = GameObject.Find("EnemyHpBar");
        la = enemyHpBar.GetComponent<EnemyHpBar>();

        sprite = gameObject.GetComponentInChildren<SpriteRenderer>();
        Debug.Log("Se crea enemigo " + GetInstanceID() + " con barra " + enemyHpBar.GetInstanceID());
    }

    public EnemyHpBar GetHpBar()
    {
        return la;
    }

    private void Update()
    {
        if (current_hp <= 0)
        {
            GameObject.Find("HealthBar").GetComponent<HealthBar>().kills++;
            AudioSource.PlayClipAtPoint(painSound[Random.Range(0, painSound.Length)], transform.position);

            int leaveCoin = Random.Range(0, 100);

            if (leaveCoin <= coinProbability)
            {
                GameObject coinsObject = GameObject.Find("Coins");
                Quaternion a = transform.rotation;
                a.y = 180;
                Instantiate(coinsObject, transform.position, a);
            }

            Destroy(gameObject);
        }

        if (sprite.color == Color.red && (Time.time - changeTime) > 0.1)
        {
            sprite.color = Color.black;
        }
    }

    public void TakeHit(float fuerza, int r_o_l, Vector3 punto_impacto)
    {
        sprite.color = Color.red;
        changeTime = Time.time;

        float high_low_modifier = 1;
        string debugMsg = Time.deltaTime + ") Enemigo recibe golpe ";

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

        if (enemyHpBar)
        {
            enemyHpBar.GetComponent<GUITexture>().pixelInset = new Rect(-50, -60, current_hp, 8);
        }
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

using UnityEngine;

    public class ChangeHPItem : MonoBehaviour
    {
        public int amount;
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
                // If the player collects the health item
                hpObject = GameObject.Find("HealthBar");

                // Assuming HealthBar is a component of hpObject
                HealthBar hp = hpObject.GetComponent<HealthBar>();

                if (hp != null)
                {
                    hp.ChangeHP(amount);
                }

                Destroy(gameObject);
            }
        }
    }

        /*if (other.gameObject.CompareTag("Player")))
        {
            // If the player collects the health item
            hpObject = GameObject.Find("HealthBar");

            // Assuming HealthBar is a component of hpObject
            HealthBar hp = hpObject.GetComponent<HealthBar>();

            if (hp != null)
            {
                hp.changeHP(amount);
            }

            Destroy(gameObject);
        }*/
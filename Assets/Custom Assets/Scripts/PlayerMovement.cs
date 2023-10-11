using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    // This script moves the character controller forward
    // and sideways based on the arrow keys.
    // It also jumps when pressing space.
    // Make sure to attach a character controller to the same game object.
    // It is recommended that you make only one call to Move or SimpleMove per frame.

    public float speed = 6.0f;
    public float jumpSpeed = 8.0f;
    public float gravity = 20.0f;

    private Vector3 moveDirection = Vector3.zero;
    public bool facingLeft = true;
    public bool agachado = false;
    public bool blocking = false;
    private SpriteRenderer sprite;
    private Animator ani;

    // Sounds
    public AudioClip jumpSound;
    public AudioClip footstepSound;

    private void Start()
    {
        sprite = gameObject.GetComponentInChildren<SpriteRenderer>();
        ani = gameObject.GetComponentInChildren<Animator>();
    }

    private void Update()
    {
        // GIRA EL SPRITE
        if (Input.GetAxis("Horizontal") > 0)
        {
            if (facingLeft)
            {
                transform.localScale = new Vector3(-transform.localScale.x, transform.localScale.y, transform.localScale.z);
                facingLeft = false;
            }
        }

        if (Input.GetAxis("Horizontal") < 0)
        {
            if (!facingLeft)
            {
                transform.localScale = new Vector3(-transform.localScale.x, transform.localScale.y, transform.localScale.z);
                facingLeft = true;
            }
        } // FIN GIRO SPRITE

        // INPUT HACE QUE EL PERSONAJE BLOQUEE
        if (Input.GetKey(KeyCode.Y))
        {
            blocking = true;
            Debug.Log("esta bloqueando: " + blocking.ToString());
            moveDirection = Vector3.zero;
            sprite.color = Color.green;
        }
        else if (blocking)
        {
            blocking = false;
            sprite.color = Color.white;
        }

        // CONTROLA MOVIMIENTO
        var controller = GetComponent<CharacterController>();
        if (controller.isGrounded && !blocking)
        {
            ani.SetBool("jumpin", false); // no salta
            ani.SetBool("blokin", false); // no bloquea
            // We are grounded, so recalculate
            // move direction directly from axes
            moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
            moveDirection = transform.TransformDirection(moveDirection);
            moveDirection *= speed;

            if (Input.GetButton("Jump"))
            {
                moveDirection.y = jumpSpeed;
                AudioSource.PlayClipAtPoint(jumpSound, transform.position); // hacer sonar salto
            }
        }
        // Apply gravity
        moveDirection.y -= gravity * Time.deltaTime;

        // Move the controller
        controller.Move(moveDirection * Time.deltaTime);
    }
}

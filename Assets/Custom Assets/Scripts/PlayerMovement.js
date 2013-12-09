	/// This script moves the character controller forward 
	/// and sideways based on the arrow keys.
	/// It also jumps when pressing space.
	/// Make sure to attach a character controller to the same game object.
	/// It is recommended that you make only one call to Move or SimpleMove per frame.	
	var speed : float = 6.0;
	var jumpSpeed : float = 8.0;
	var gravity : float = 20.0;
	private var moveDirection : Vector3 = Vector3.zero;
	var facingLeft = true;
	var agachado = false;
	public var blocking = false;
	private var sprite:SpriteRenderer;
	
	function Start()
	{
		sprite = gameObject.GetComponentInChildren(SpriteRenderer);
	
	}
	
	function Update() {
		/*GIRA EL SPRITE*/
		if(Input.GetAxis("Horizontal")>0)
		{ 
			if(facingLeft)
			{
				transform.localScale.x *= -1; 
				facingLeft = false;
			}
		}
		if(Input.GetAxis("Horizontal")<0)
		{
			if(!facingLeft)
			{
				transform.localScale.x *= -1; 
				facingLeft = true;
			}
		}/*FIN GIRO SPRITE*/
		
		
		/*INPUT HACE QUE EL PERSONAJE BLOQUEE*/
		if(Input.GetKey(KeyCode.Y))
		{
			blocking = true;
			Debug.Log("esta bloqueando: "+blocking.ToString());
			moveDirection = Vector3.zero;
			sprite.color= Color.green;
			
		
		}else if(blocking)
		{
			blocking=false;
			sprite.color= Color.white;
		}
		
		
		
		/*INPUT AGACHA AL PERSONAJE*/
		if(Input.GetKey(KeyCode.C))
		{
			agachado = true;
			Debug.Log("esta agachado: "+agachado.ToString());
		
		}else if(agachado)
		{
			agachado=false;
		}
		//else agachado = true;
		
		
		//AGACHA EL GAMEOBJECT
		if(agachado)
		{ 
			if(transform.localScale.y==1)transform.localPosition.y-=1;
			transform.localScale.y *= 0.5;
		}else 
		{
			if(transform.localScale.y<1)transform.localPosition.y+=2;
			transform.localScale.y=1;
		}
		/*FIN AGACHAR PERSONAJE*/
		
		//CONTROLA MOVIMIENTO
		var controller : CharacterController = GetComponent(CharacterController);
		if (controller.isGrounded && !blocking) {
			// We are grounded, so recalculate
			// move direction directly from axes
			moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,
			                        Input.GetAxis("Vertical"));
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;
			
			if (Input.GetButton ("Jump")) {
				moveDirection.y = jumpSpeed;
			}
		}
		// Apply gravity
		moveDirection.y -= gravity * Time.deltaTime;
		
		// Move the controller
		controller.Move(moveDirection * Time.deltaTime);
	}
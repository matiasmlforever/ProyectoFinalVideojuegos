	#pragma strict
	/// This script moves the character controller forward 
	/// and sideways based on the arrow keys.
	/// It also jumps when pressing space.
	/// Make sure to attach a character controller to the same game object.
	/// It is recommended that you make only one call to Move or SimpleMove per frame.	
	
	var facingLeft = true;
	var agachado = false;
	public var player1 : GameObject;
		
	// Speed in units per sec.
	var speed: float;
	var x2: float;
	
	function Start() {
		x2 = transform.position.x;

	}

	function Update() {
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, player1.transform.position, step);
		/*GIRA EL SPRITE*/
		var x1 : float = transform.position.x;
		if(x2>x1)
		{
				transform.localScale.x = 1;
				x2 = transform.position.x;
		}else{
				transform.localScale.x = -1;
				x2 = transform.position.x;
		}
		/*FIN GIRO SPRITE*/
		
		
		
		/*INPUT AGACHA AL PERSONAJE*/
		/*if(Input.GetKey(KeyCode.C))
		{
			agachado = true;
			Debug.Log("esta agachado: "+agachado.ToString());
		
		}else if(agachado)
		{
			agachado=false;
		}*/
		//else agachado = true;
		
		
		//AGACHA EL GAMEOBJECT
		/*if(agachado)
		{ 
			if(transform.localScale.y==1)transform.localPosition.y-=1;
			transform.localScale.y *= 0.5;
		}else 
		{
			if(transform.localScale.y<1)transform.localPosition.y+=2;
			transform.localScale.y=1;
		}*/
		/*FIN AGACHAR PERSONAJE*/


	}
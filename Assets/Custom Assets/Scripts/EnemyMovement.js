	#pragma strict
	/// This script moves the character controller forward 
	/// and sideways based on the arrow keys.
	/// It also jumps when pressing space.
	/// Make sure to attach a character controller to the same game object.
	/// It is recommended that you make only one call to Move or SimpleMove per frame.	
	
	var facingLeft = true;
	var agachado = false;
	var player1 : GameObject;
		
	// Speed in units per sec.
	var speed: float;
	var x2: float;
	var flag1: int = 0;
	
	function Start() {
		x2 = transform.position.x;
		player1 = GameObject.Find("3d Chileno");

	}

	function Update() {
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		// si la vida esta llena camina tranquilo
		if(this.GetComponent(EnemyStatsHandler).lleno){
			if(this.transform.position != Vector3(1448,3501,-4668) && flag1 == 0){ //si no ha llegado al cruce del mapa
				transform.position = Vector3.MoveTowards(transform.position, Vector3(1448,3501,-4668), step);
				if(this.transform.position == Vector3(1448,3501,-4668))
					flag1 = 1;
			}else{ // si ya llego al cruce
				transform.position = Vector3.MoveTowards(transform.position, Vector3(1660,3501,-4668), step);
				if(this.transform.position.x > 1655){
					Destroy (gameObject);
				}
			}
		}
		//si le pegaron
		else{
		
		// Move our position a step closer to the target.
		if(( 6 > Mathf.Abs(player1.transform.position.x - transform.position.x))
		&& 1 > Mathf.Abs(player1.transform.position.z - transform.position.z))
		{
			
		}else{
			transform.position = Vector3.MoveTowards(transform.position, player1.transform.position, step);
			var x1 : float = transform.position.x;
			if(x2>x1)
			{
					transform.localScale.x = 1;
					x2 = transform.position.x;
			}else{
					transform.localScale.x = -1;
					x2 = transform.position.x;
			}
		}/*GIRA EL SPRITE*/
		}

	}
	
	
	
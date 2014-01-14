﻿	#pragma strict
	/// This script moves the character controller forward 
	/// and sideways based on the arrow keys.
	/// It also jumps when pressing space.
	/// Make sure to attach a character controller to the same game object.
	/// It is recommended that you make only one call to Move or SimpleMove per frame.	
	
	var facingLeft = true;
	var agachado = false;
	var player1 : GameObject;
	var togo:GameObject;
	var i:int;
		
	// Speed in units per sec.
	var speed: float;
	var x2: float;
	var flag1: int = 1;
	
	function Start() {
		x2 = transform.position.x;
		//player1 = GameObject.Find("3d Chileno");
		player1 = GameObject.FindGameObjectWithTag("Player");
		
		i=1;
		togo = GameObject.Find("togo"+i);
		
		var curTransform : Transform;
		
		curTransform = gameObject.GetComponent(Transform);
	}

	function Update() {
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		var other : EnemyStatsHandler = gameObject.GetComponent(EnemyStatsHandler);
		// si la vida esta llena camina tranquilo
		if(other.lleno()){
			
			if ( Vector3.Distance(togo.transform.position, transform.position) < 2.0 ){
				Debug.Log("llego a "+i);
				if(i==2){ //si llega al togo2 se destrulle
					Destroy (gameObject);
				}
				i++;
				togo = GameObject.Find("togo"+i);
			}
			transform.position = Vector3.MoveTowards(transform.position, togo.transform.position, step);

		}
		//si le pegaron
		else{
			//Debug.Log("enemigo esta dañado");
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
	
	
	
	#pragma strict
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
	var barra : GameObject; //This should be were Script B goes
	private var la:EnemyHpBar;
		
	// Speed in units per sec.
	var speed: float;
	var x2: float;
	var flag1: int = 1;
	
	function Start() {
		x2 = transform.position.x;
		
		i=1;
		togo = GameObject.Find("togo"+i);
		
		var curTransform : Transform;
		
		curTransform = gameObject.GetComponent(Transform);
	}

	function Update() {
		if(!player1){
			player1 = GameObject.FindGameObjectWithTag("Player");
			//barra = gameObject.GetComponent(EnemyStatsHandler).getHpBar(); 
			//barra.target = transform;
		}
		
		//verifica que enemyspawn es
		if(transform.position.z>-4600){ i=5; togo = GameObject.Find("togo"+i);}
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		var other : EnemyStatsHandler = gameObject.GetComponent(EnemyStatsHandler);
		// si la vida esta llena camina tranquilo
		if(other.lleno()){
			// si llega al punto correspondiente
			if ( Vector3.Distance(togo.transform.position, transform.position) < 2.0 ){
				Debug.Log(gameObject + " llego a "+i);
				if(i==6){ //si llega al togo6 se destrulle
					//barra.DestroyBar();
					Destroy(gameObject);
				}
				i++; // pasa al siguiente punto
				togo = GameObject.Find("togo"+i);
			}
			if(GameObject!=null && togo!=null) transform.position = Vector3.MoveTowards(transform.position, togo.transform.position, step);

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
	
	
	
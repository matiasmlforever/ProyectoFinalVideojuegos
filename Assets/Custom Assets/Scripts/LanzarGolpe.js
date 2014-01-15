#pragma strict
public var fuerza_punio: float;
public var fuerza_patada:float;
public var raycast_distance:float;
public var isCrouching:int = 0;
private var enemigo_receptor:EnemyStatsHandler;
private var enemigo_receptor2:EnemyStatsHandler2;
private var personaje:PlayerMovement;

//sonidos
var punchSound:AudioClip;
var punch2Sound:AudioClip;
var kickSound:AudioClip;
var kick2Sound:AudioClip;

function Start () {

}

function Update () {
	personaje = gameObject.GetComponent(PlayerMovement);
	if(!personaje.blocking)
	{
		//INICIO DE PUÑETAZO
		if(Input.GetKeyDown(KeyCode.U))// || Input.GetKeyDown(KeyCode.I))//si apreta tecla U o I(puño alto)
		{	
			var r_o_l_punch:int;
			if(Input.GetKeyDown(KeyCode.U)){
				//Debug.Log("PUÑO IZQUIERDO");
				r_o_l_punch = 1; //LEFT
				AudioSource.PlayClipAtPoint(punchSound, transform.position); //hacer sonar golpe puño
			}
		
			var hit_punio : RaycastHit;
			
			var lugar_origen_alto = Vector3(transform.position.x,transform.position.y,transform.position.z);
			
			if (Physics.Raycast(lugar_origen_alto,(transform.localScale.x)*Vector3.left,hit_punio,raycast_distance)) 
			{
				if (hit_punio.rigidbody != null && (hit_punio.collider.tag =="golpeable"))
				{
					//Debug.Log("Hay receptor de puño");
					//hit_alto.rigidbody.AddForce(Vector3.right * fuerza_golpe);
					hit_punio.rigidbody.AddForceAtPosition((transform.localScale.x)*Vector3.left * fuerza_punio,hit_punio.point);
					//Debug.Log(hit_punio.collider.gameObject.name);
					/*
					enemigo_receptor = hit_punio.collider.gameObject.GetComponent(EnemyStatsHandler);
					enemigo_receptor.takeHit(fuerza_punio,r_o_l_punch,hit_punio.point);
					*/
					
					enemigo_receptor = hit_punio.collider.gameObject.GetComponent(EnemyStatsHandler);
					if(enemigo_receptor==null)
					{
						enemigo_receptor2 = hit_punio.collider.gameObject.GetComponent(EnemyStatsHandler2);
						enemigo_receptor2.takeHit(fuerza_punio,r_o_l_punch,hit_punio.point);
					}
					else
					{
						enemigo_receptor.takeHit(fuerza_punio,r_o_l_punch,hit_punio.point);
					}
					
					
				}
			}
		}//FIN DE PUÑETAZO
		
		//INICIO PATADAS
		if(Input.GetKeyDown(KeyCode.J))// || Input.GetKeyDown(KeyCode.K))//si apreta tecla J o K(patadas)
		{	

			var r_o_l_kick:int;
			if(Input.GetKeyDown(KeyCode.J)){
				//Debug.Log("PATADA IZQUIERDA");
				r_o_l_kick = 1; //LEFT
				AudioSource.PlayClipAtPoint(kickSound, transform.position); //hacer sonar golpe patada
			}
			var hit_kick : RaycastHit;
			var lugar_origen_low = Vector3(transform.position.x,transform.position.y,transform.position.z);
			
			if (Physics.Raycast(lugar_origen_low,(transform.localScale.x)*Vector3.left,hit_kick,raycast_distance)) 
			{
				if (hit_kick.rigidbody != null && (hit_kick.collider.tag =="golpeable"))
				{
					//Debug.Log("Hay receptor de patada");
					hit_kick.rigidbody.AddForceAtPosition((transform.localScale.x)*Vector3.left * fuerza_patada,hit_kick.point);
					//Debug.Log(hit_kick.collider.gameObject.name);
					enemigo_receptor = hit_kick.collider.gameObject.GetComponent(EnemyStatsHandler);
					if(enemigo_receptor==null)
					{
						enemigo_receptor2 = hit_kick.collider.gameObject.GetComponent(EnemyStatsHandler2);
						enemigo_receptor2.takeHit(fuerza_patada,r_o_l_kick,hit_kick.point);
					}
					else
					{
						enemigo_receptor.takeHit(fuerza_patada,r_o_l_kick,hit_kick.point);
					}
				}
			}
		}//FIN PATADAS
	}
	else//SI ESTA BLOQUEANDO
	{
		Debug.Log("NO PUEDE GOLPEAR, ESTA BLOQUEANDO");	
	}

}
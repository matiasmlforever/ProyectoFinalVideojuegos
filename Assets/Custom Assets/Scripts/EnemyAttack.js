#pragma strict
public var fuerza_punio: float;
public var fuerza_patada:float;
public var raycast_distance:float;
private var enemigo_receptor:PlayerStatsHandler;
private var personaje:EnemyMovement;

public var player1 : GameObject;

function Start () {
	player1 = GameObject.FindGameObjectWithTag("Player");
}

function Update () {

	/*var hit:RaycastHit;
	var lugar_origen = Vector3(transform.position.x,transform.position.y,transform.position.z);
	
	if (Physics.Raycast(lugar_origen,(transform.localScale.x)*Vector3.left,hit,raycast_distance)) 
	{
		if ((hit.collider.tag =="Player"))
		{
			Debug.Log("LE PEGA AL JUGADOR");
			//hit_alto.rigidbody.AddForce(Vector3.right * fuerza_golpe);
			Debug.Log(hit.collider.gameObject.name);
			enemigo_receptor = hit.collider.gameObject.GetComponent(PlayerStatsHandler);
			enemigo_receptor.takeHit(fuerza_punio,hit.point);
		}
	}*/
		//Debug.Log(player1.transform.position.x.ToString());
		if(( 1 < Mathf.Abs(player1.transform.position.x - transform.position.x) 
		&& 8 > Mathf.Abs(player1.transform.position.x - transform.position.x))
		&& 1 > Mathf.Abs(player1.transform.position.z - transform.position.z))
		{
				Debug.Log("Enemigo lanza golpe");
				
				var hit_punio : RaycastHit;
		
				var lugar_origen_alto = Vector3(transform.position.x,transform.position.y,transform.position.z);
				
				if (Physics.Raycast(lugar_origen_alto,(transform.localScale.x)*Vector3.left,hit_punio,raycast_distance)) 
				{
					if ((hit_punio.collider.tag =="Player"))
					{
						Debug.Log("Player recive el golpe");
						//hit_alto.rigidbody.AddForce(Vector3.right * fuerza_golpe);
						//hit_punio.rigidbody.AddForceAtPosition((transform.localScale.x)*Vector3.left * fuerza_punio,hit_punio.point);
						Debug.Log(hit_punio.collider.gameObject.name);
						enemigo_receptor = hit_punio.collider.gameObject.GetComponent(PlayerStatsHandler);
						enemigo_receptor.takeHit(fuerza_punio,hit_punio.point);
					}
				}
		}
}
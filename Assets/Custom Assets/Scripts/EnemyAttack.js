#pragma strict

public var fuerza_punio: float;
public var fuerza_patada:float;
public var raycast_distance:float;
private var enemigo_receptor:PlayerStatsHandler;
private var personaje:EnemyMovement;
var coolDownPeriodInSeconds:float;
var timeStamp:float;

public var player1 : GameObject;

function Start () {
	//while(player1 == null)	{
		player1 = GameObject.FindGameObjectWithTag("Player");
		timeStamp = Time.time + coolDownPeriodInSeconds;
		coolDownPeriodInSeconds=0.3;
	//}
}

function Update () {
	var lugar_origen = Vector3(transform.position.x,transform.position.y,transform.position.z);
	
	//Debug.Log(player1.transform.position.x.ToString());
	if(( 1 < Mathf.Abs(player1.transform.position.x - transform.position.x) 
	&& 8 > Mathf.Abs(player1.transform.position.x - transform.position.x))
	&& 1 > Mathf.Abs(player1.transform.position.z - transform.position.z))
	{
	
		if (timeStamp <= Time.time)
		{
			timeStamp = Time.time + coolDownPeriodInSeconds;
			
			Debug.Log("Enemigo lanza golpe");
			
			var hit_punio : RaycastHit;
	
			var lugar_origen_alto = Vector3(transform.position.x,transform.position.y,transform.position.z);
			
			if (Physics.Raycast(lugar_origen_alto,(transform.localScale.x)*Vector3.left,hit_punio,raycast_distance)) 
			{
				if ((hit_punio.collider.tag =="Player"))
				{
					Debug.Log("Enemigo golpea a " + hit_punio.collider.gameObject.name + " con fuerza [[[ " + fuerza_punio + " ]]]");
					//hit_alto.rigidbody.AddForce(Vector3.right * fuerza_golpe);
					//hit_punio.rigidbody.AddForceAtPosition((transform.localScale.x)*Vector3.left * fuerza_punio,hit_punio.point);
					//enemigo_receptor = hit_punio.collider.gameObject.GetComponent(PlayerStatsHandler);
					//enemigo_receptor.takeHit(fuerza_punio,hit_punio.point);
					var hpObject = GameObject.Find("HealthBar");		
					var hp = hpObject.GetComponent(HealthBar);
					hp.changeHP(-fuerza_punio); 
				}
			}
		}
	}
}
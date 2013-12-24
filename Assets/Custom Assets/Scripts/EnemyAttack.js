﻿#pragma strict
public var fuerza_punio: float;
public var fuerza_patada:float;
public var raycast_distance:float;
private var enemigo_receptor:PlayerStatsHandler;
private var personaje:EnemyMovement;
function Start () {

}

function Update () {

	var hit:RaycastHit;			
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
	}
}
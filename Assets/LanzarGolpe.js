#pragma strict
public var fuerza_golpe: float;
public var raycast_distance:float;
public var hit_offset:float;
function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1"))//si apreta el boton 1
	{
		Debug.Log("Golpe ALTO");
		var hit_alto : RaycastHit;
		
		var lugar_origen_alto = Vector3(transform.position.x,transform.position.y+hit_offset,transform.position.z);
		
		if (Physics.Raycast(lugar_origen_alto,Vector3.right,hit_alto,raycast_distance)) 
		{
			if (hit_alto.rigidbody != null && (hit_alto.collider.tag =="golpeable"))
			{
				Debug.Log("HAY GOLPEABLE ALTO");
				//hit_alto.rigidbody.AddForce(Vector3.right * fuerza_golpe);
				hit_alto.rigidbody.AddForceAtPosition(Vector3.right * fuerza_golpe,hit_alto.point);
			}
		}
	}
	
	if(Input.GetButtonDown("Fire2"))//si apreta el boton 2
	{
		Debug.Log("Golpe BAJO");
		
		var hit_low : RaycastHit;
		var lugar_origen_low = Vector3(transform.position.x,transform.position.y-hit_offset,transform.position.z);
		
		if (Physics.Raycast(lugar_origen_low,Vector3.right,hit_low,raycast_distance)) 
		{
			if (hit_low.rigidbody != null && (hit_low.collider.tag =="golpeable"))
			{
				Debug.Log("HAY GOLPEABLE BAJO");
				hit_low.rigidbody.AddForceAtPosition(Vector3.right * fuerza_golpe,hit_low.point);
			}
		}
	}
	
	/*
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, -Vector3.up, hit, 100.0)) {
		var distanceToGround = hit.distance;
	}
	*/
}
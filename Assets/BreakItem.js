#pragma strict
public var hp:int = 100;
public var limite:int = -300;
public var completo:GameObject; 
function Start () {

}

function Update () {

	if(hp<=limite)
	{
		if(transform.name == "caja")
		{
			Instantiate(completo, transform.position, transform.rotation); 
		}
		Destroy(this.gameObject);
		//Destroy(transform.parent.FindChild("Rueda"));
		
	}	
}

function FixedUpdate()
{

if ( rigidbody.velocity.magnitude > 0.02 )
 {
 	renderer.material.color = Color.red;
 	//Debug.Log(rigidbody.velocity.magnitude);
 	//Debug.Log(hp);
 	hp= hp - (rigidbody.velocity.magnitude+1);
 	
 }
 else{
 	renderer.material.color = Color.white;
 }
}
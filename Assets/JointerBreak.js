#pragma strict

function Start () {

}

function Update () {

}

function OnJointBreak(breakForce : float) { 
		var foco:Transform;
		var luz:Transform;
		Debug.Log("Joint Broke!, force: " + breakForce);
		foco = transform.parent.Find("Foco");
		luz = foco.transform.Find("Point Light");
		
		
		//destruye la luz
		Destroy(luz);
}
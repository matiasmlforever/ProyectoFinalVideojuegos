#pragma strict

function Start () {

}

function Update () {

}

function OnJointBreak(breakForce : float) { 
		var foco:Transform;
		var luz:Light;
		//Debug.Log("Joint Broke!, force: " + breakForce);
		foco = transform.parent.Find("Foco");
		luz = foco.GetComponentInChildren(Light);
		
		//Debug.Log(luz);
		//destruye la luz
		Destroy(luz);
}
#pragma strict

public var amount : int;
var hpObject : GameObject;
//sonidos

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.CompareTag("Player")){ //si el player toma el healthItem		
		hpObject = GameObject.Find("HealthBar");		
		var hp = hpObject.GetComponent(HealthBar);
		hp.changeHP(amount);
	  Destroy(gameObject);
	}
}
#pragma strict

var amount = 400;
var hpObject : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.CompareTag("Player")){ //si el player toma el healthItem		
		hpObject = GameObject.Find("HealthBar");		
		var stats = hpObject.GetComponent(HealthBar);
		stats.changeMoney(amount);
	  Destroy(gameObject);
	}
}
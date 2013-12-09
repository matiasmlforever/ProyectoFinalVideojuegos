#pragma strict
private var receptor:PlayerStatsHandler;

public var heal_amount:int=500;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
		if(other.gameObject.CompareTag("Player")){ //HELEA AL JUGADOR
			receptor = other.GetComponent(PlayerStatsHandler);
			receptor.heal(heal_amount);
			Destroy(gameObject);
		}
	}
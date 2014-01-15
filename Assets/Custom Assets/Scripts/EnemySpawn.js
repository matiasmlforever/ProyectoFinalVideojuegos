#pragma strict
public var enemy : GameObject;
public var player1 : GameObject;
public var player2 : GameObject;

//Minimum time to wait before spawning a random object (in seconds)
var min_wait_time = 5;

//max time to wait before spawning a random object (in seconds)
var max_wait_time = 15;

var start_spawn = true;

function Start () 
{
    /*// Instantiate the object at the position and rotation of this transform
    var clone : GameObject;
    clone = Instantiate(enemy, transform.position, transform.rotation);*/    
}

function Update () {
    var clone : GameObject;             

	if(start_spawn == true)
    {           
        if(Random.Range(0,250)==1)
            clone = Instantiate(enemy, transform.position, transform.rotation);
    }

}
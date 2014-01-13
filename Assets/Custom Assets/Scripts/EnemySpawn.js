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

	if(start_spawn == true)
    {   
        /*
        Call the spawn function with the id set to a random number between 0 and the length of the obj array -1 (since arrays start at 0)
        Then set the wait_time to a random float number between the min_wait_time and max_wait_time (Note: We add0.1 because the max in random.range
        is exclusive and in order to get the max value as a result the max must be greater.
        */
        if(Random.Range(0,300)==1)
        //if(Random.Range(0,20)==1)
        {
            var clone : GameObject;
    		clone = Instantiate(enemy, transform.position, transform.rotation);            
		}

    }

}
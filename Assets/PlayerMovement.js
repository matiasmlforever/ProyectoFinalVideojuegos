﻿#pragma strict
public var moveSpeed : float = 30F;

function Start () {

}

function Update () {
	transform.Translate(Input.GetAxis("Horizontal") * moveSpeed * Time.deltaTime,0,0);
	transform.Translate(0,Input.GetAxis("Vertical") * moveSpeed * Time.deltaTime,Input.GetAxis("Vertical")* moveSpeed * Time.deltaTime); //lo mueve hacia arriba
	//y tb en el eje Z, para que hayan elementos antes y despues
	
	//rigidbody.AddRelativeForce (Input.GetAxis("Horizontal") * moveSpeed * Time.deltaTime,0,0, ForceMode.VelocityChange);
	
}
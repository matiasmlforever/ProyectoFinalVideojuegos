#pragma strict

function Start () {

}

function FixedUpdate () {
	var ani:Animator;
	var velocidads:float = Input.GetAxis("Horizontal");
	ani = GetComponent(Animator);
	ani.SetFloat("velocidad_mov",Mathf.Abs(velocidads)); 
}
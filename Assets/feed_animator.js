#pragma strict
var ani:Animator;	

function Start () {
	ani = GetComponent(Animator);
}

function FixedUpdate () {	
	if(Input.GetKey(KeyCode.U)){//puño derecho
		ani.SetBool("right_punch",true);
	}
	else if(Input.GetKey(KeyCode.J))//patada derecha
	{
		ani.SetBool("right_kick",true);
	}
	else if (Input.GetButton ("Jump"))
	{			
		ani.SetBool("jumpin",true);
	}
	else if(Input.GetKey(KeyCode.Y))
	{
		ani.SetBool("blokin",true);
	}
	else
	{
		ani.SetBool("right_punch",false);//no pega
		ani.SetBool("right_kick",false);//no pega
		//ani.SetBool("jumpin",false);//no salta
		var velocidads:float = Input.GetAxis("Horizontal");
		ani.SetFloat("velocidad_mov",Mathf.Abs(velocidads));
	}
}
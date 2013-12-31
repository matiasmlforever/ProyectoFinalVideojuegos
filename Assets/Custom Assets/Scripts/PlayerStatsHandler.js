#pragma strict
public var HPBAR:GameObject;
public var max_hp:int;
public var current_hp:int;
public var armor:int;
private var escala_local_barra:float=1;
private var player_moves:PlayerMovement;

function Start () {
	current_hp = max_hp;
	HPBAR.GetComponent(GUIText).guiText.text=gameObject.name;//cambia identificador en la gui
}

function Update () {
	HPBAR.transform.localScale.x = escala_local_barra;
	if(current_hp <= 0)//si baja de 0 se destruye el enemigo
	{
			Destroy(gameObject);
			Destroy(HPBAR);
	}
}

/*Funcion que toma la fuerza como magnitud, pierna/puño con la que fue golpeado y el punto de impacto*/
public function takeHit(fuerza:float,punto_impacto:Vector3)
{
	player_moves = gameObject.GetComponent(PlayerMovement);
	
	var result_damage:float;
	result_damage = fuerza - armor;
	
	var high_low_modifier:float = 1;
	Debug.Log("TAKING HIT");
	//Debug.Log(fuerza);
	//Debug.Log(punto_impacto);
	
	//distingue la altura a la que recibe el golpe
	if(punto_impacto.y > transform.localPosition.y) //si el impacto lo recibe sobre el centro del player
	{
		
		//es golpe alto
		//Debug.Log("TOMA ALTO");
	}else
	{
		//es golpe bajo
		//Debug.Log("TOMA BAJO");
	}
	
	//SI ESTA BLOQUEANDO REDUCE AL 5% EL DAÑO DEL //PUEDE SER UNA VARIABLE PUBLICA
	if(player_moves.blocking) result_damage=result_damage*0.05;
	
	
	if(result_damage <= 0) result_damage = 0; 
	//realiza el descuento del impacto sobre el HP enemigo
	current_hp=current_hp-(result_damage);
	//HPBAR.GetComponent(GUIText).guiText.text=gameObject.name;//cambia identificador en la gui
	
	var hit_proportion:float = fuerza/max_hp;
	escala_local_barra=HPBAR.transform.localScale.x-(hit_proportion*0.5);//dismunuye la barra en la GUI TODO:ARREGLAR	
	Debug.Log(current_hp);
	
	
}
public function getCurrentHP()
{
	return current_hp;
}

public function heal(amount:int)
{
	var heal_proportion:float = amount/max_hp;
	escala_local_barra=HPBAR.transform.localScale.x+(heal_proportion*0.5);
	Debug.Log(escala_local_barra);
	current_hp=current_hp+amount;
	if(current_hp > max_hp) current_hp = max_hp;
}
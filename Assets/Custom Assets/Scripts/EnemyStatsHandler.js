#pragma strict
public var HPBAR:GameObject;
public var max_hp:int = 1000;
public var current_hp:int;
public var armor:int;
private var escala_local_barra:float=1;

function Start () {
	current_hp = max_hp;
}

function Update () {
	if(escala_local_barra!=1)HPBAR.transform.localScale.x = escala_local_barra;
		
	if(current_hp <= 0)//si baja de 0 se destruye el enemigo
	{
			Destroy(gameObject);
			HPBAR.transform.localScale.x = 1; //resetea la barra
			//Destroy(HPBAR);
	}
	
}

/*Funcion que toma la fuerza como magnitud, pierna/puño con la que fue golpeado y el punto de impacto*/
public function takeHit(fuerza:float,r_o_l:int,punto_impacto:Vector3)
{
	var high_low_modifier:float = 1;
	Debug.Log("TAKING HIT");
	//Debug.Log(fuerza);
	//Debug.Log(punto_impacto);
	
	//distingue la altura a la que recibe el golpe
	if(punto_impacto.y > transform.localPosition.y) //si el impacto lo recibe sobre el centro del enemigo
	{
		//es golpe alto
		Debug.Log("TOMA ALTO");
	}else
	{
		//es golpe bajo
		Debug.Log("TOMA BAJO");
	}
	
	//realiza el descuento del impacto sobre el HP enemigo
	current_hp=current_hp-(fuerza-armor);
	HPBAR.GetComponent(GUIText).guiText.text=gameObject.name;//cambia identificador en la gui //dependiendo al que este golpeando
	
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
	current_hp=current_hp+amount;
}

public function lleno(){

	if(current_hp == max_hp)
		return true;
	else
		return false;

}
#pragma strict

//public var HPBAR:GameObject;
public var max_hp:int = 100;
public var current_hp:int;
public var armor:int;
public var coinProbability = 50;
private var escala_local_barra:float=1;

private var enemyHpBar:GameObject;
private var hpbar:GameObject;
private var la:EnemyHpBar;
private var sprite:SpriteRenderer;

private var changeTime:float;

var painSound:AudioClip[];

function Start () {
	current_hp = max_hp;
	
	var cam = GameObject.Find("GameCamera"); //tomar la cámara para que la barra de vida siga al enemigo acorde a la pantalla       
	var enemyHpBar = GameObject.Find("EnemyHpBar");
	hpbar = enemyHpBar;
  la = hpbar.GetComponent(EnemyHpBar); 
  
  sprite = gameObject.GetComponentInChildren(SpriteRenderer);//para ir cambiando el color cuando se le golpea
  //Debug.Log(sprite);
}

function getHpBar(){
	return la;
}

function Update () 
{
	
	//if(escala_local_barra!=1)HPBAR.transform.localScale.x = escala_local_barra;		
	if(current_hp <= 0)//si baja de 0 se destruye el enemigo
	{
		GameObject.Find("HealthBar").GetComponent(HealthBar).kills ++; //aumentar el conteo de muertos en los stats
		AudioSource.PlayClipAtPoint(painSound[Random.Range(0, painSound.length)], transform.position); // //sonido de muerte		
		
		var leaveCoin = Random.Range(0,100); //Debug.Log("Deja moneda? (0,"+coinProbability+") -> " + leaveCoin);			

		if(leaveCoin<=coinProbability)
		{
			var coinsObject = GameObject.Find("Coins");
			var a = transform.rotation; a.y = 180; //FIX HORRIBLE					
  		var coins = Instantiate(coinsObject, transform.position, a);  //instanciar la barra de vida
		}
		
		Destroy(gameObject);			
	}
	
	//Debug.Log(Time.time - changeTime);
	if(sprite.color == Color.red && ((Time.time - changeTime) > 0.1))
	{
		
		sprite.color = Color.black;
	}
	
}

/*Funcion que toma la fuerza como magnitud, pierna/puño con la que fue golpeado y el punto de impacto*/
public function takeHit(fuerza:float, r_o_l:int, punto_impacto:Vector3)
{	
	sprite.color = Color.red; //rojea el personaje
	changeTime = Time.time;
	
	var high_low_modifier:float = 1;
	var debugMsg = Time.deltaTime + ") Enemigo recibe golpe ";
	
	//distingue la altura a la que recibe el golpe
	if(punto_impacto.y > transform.localPosition.y) //si el impacto lo recibe sobre el centro del enemigo
	{
		debugMsg += " ALTO";
	}else
	{
		debugMsg += " BAJO";
	}
	
	debugMsg += "[ " + current_hp + " -> "; 

	//realiza el descuento del impacto sobre el HP enemigo
	current_hp=current_hp-(fuerza-armor);

	debugMsg += current_hp + " ]";
	
	//hpbar.transform.localScale = Vector3.zero;
	//Se reduce la barra de vida del enemigo al nuevo largo =current_hp y alto = 8
	if(hpbar)
		hpbar.guiTexture.pixelInset = Rect (-50, -60, current_hp, 8);
	
	//Debug.Log(debugMsg);
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
#pragma strict

public var p1_gui: GameObject;
public var p2_gui: GameObject;
public var selected: int; // 1 o 2
public var base_color:Color;

function Start () {
	var p1_texture:GUITexture; 
	p1_texture = p1_gui.GetComponent(GUITexture);
	base_color = p1_texture.color;
	
	selected = 1;	
}

function Update () {
	if(Input.GetAxis("Horizontal"))
	{
		if(selected == 1)
		{
			selected = 2;
			p2_gui.guiTexture.color=Color.cyan;
			p1_gui.guiTexture.color=base_color;
			PlayerPrefs.SetInt("pj", 2);
				
		}
		else
		{
			selected = 1;
			p1_gui.guiTexture.color=Color.cyan;
			p2_gui.guiTexture.color=base_color;
			PlayerPrefs.SetInt("pj", 1);
			
		}
	}
	
	if(Input.GetKeyDown(KeyCode.Return))
	{
		Application.LoadLevel("Stage01_Calle");
	}
}
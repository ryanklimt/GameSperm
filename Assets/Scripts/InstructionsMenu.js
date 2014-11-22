public var smallMenu : GUIStyle = null;
public var normalMenu : GUIStyle = null;
public var largeMenu : GUIStyle = null;

public var loadingScene = null;

var blackScreen : Texture2D;
private var fadeIn : boolean = true;
var fadeTime : float = 1;
private var color : Color = Color.black;
private var timer : float = 1;

function InstructionsMenu() {
	//layout start
	GUI.BeginGroup(Rect(15, Screen.height/2 - 200, Screen.width-15, 500));
	GUI.backgroundColor = Color.clear;
	
	//title
	if(GUI.Button(Rect(55, 55, 150, 40), "Back", normalMenu)) FadeOut("MenuScene");
	
	//main menu buttons
	GUI.Label(Rect(55, 110, 150, 75), "How", largeMenu);
	GUI.Label(Rect(55, 200, Screen.width-155, 40), "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", smallMenu);
	
	//layout end
	GUI.EndGroup();
}

function OnGUI () {
	InstructionsMenu();

	if (fadeIn)
	{
		color.a = timer / fadeTime;
	}
	else
	{
		color.a = 1 - (timer / fadeTime);
	}

	GUI.color = color;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), blackScreen);
}

function Start () {
	Screen.lockCursor = false; 
}

function Update () {
	timer -= Time.deltaTime;
	if (timer <= 0)
	{
		timer = 0;
		if(loadingScene)
		{
			Application.LoadLevel(loadingScene);
		}
	}
}

function FadeIn()
{
	timer = fadeTime;
	fadeIn = true;
}

function FadeOut(sceneName:String)
{
	if(!loadingScene) {
		timer = fadeTime;
		fadeIn = false;
		loadingScene = sceneName;
	}
}
public var smallMenu : GUIStyle = null;
public var normalMenu : GUIStyle = null;
public var largeMenu : GUIStyle = null;

public var loadingScene : String = null;

var blackScreen : Texture2D;
private var fadeIn : boolean = true;
var fadeTime : float = 1;
private var color : Color = Color.black;
private var timer : float = 1;

function MainMenu() {
	//layout start
	GUI.BeginGroup(Rect(15, Screen.height/2 - 200, Screen.width-15, 500));
	GUI.backgroundColor = Color.clear;
	
	//title
	GUI.Label(Rect(55, 55, 150, 40), "GameSperm", normalMenu);
	
	//main menu buttons
	if(GUI.Button(Rect(55, 110, 150, 75), "Play", largeMenu)) FadeOut("MainScene");
	if(GUI.Button(Rect(55, 200, 150, 40), "How", normalMenu)) FadeOut("InstructionsScene");
	if(GUI.Button(Rect(55, 245, 150, 40), "Scores", normalMenu)) FadeOut("ScoreScene");
	if(GUI.Button(Rect(55, 290, 150, 40), "Exit", normalMenu)) FadeOut("SecretScene");
	
	//layout end
	GUI.EndGroup();
}

function OnGUI () {
	MainMenu();
	if (fadeIn)	{
		color.a = timer / fadeTime;
	} else {
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
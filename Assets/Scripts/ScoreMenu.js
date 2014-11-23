public var smallMenu : GUIStyle = null;
public var normalMenu : GUIStyle = null;
public var largeMenu : GUIStyle = null;

public var loadingScene : String = null;

var blackScreen : Texture2D;
private var fadeIn : boolean = true;
var fadeTime : float = 1;
private var color : Color = Color.black;
private var timer : float = 1;

private var highScore : float = 0.0;

function ScoreMenu() {
	//layout start
	GUI.BeginGroup(Rect(15, Screen.height/2 - 200, Screen.width-15, 500));
	GUI.backgroundColor = Color.clear;
	
	//title
	if(GUI.Button(Rect(55, 55, 150, 40), "Back", normalMenu)) FadeOut("MenuScene");
	
	//main menu buttons
	GUI.Label(Rect(55, 110, 150, 75), "Most Found:", largeMenu);
	GUI.Label(Rect(55, 200, 150, 40), highScore + " items!", normalMenu);
	
	//layout end
	GUI.EndGroup();
}

function OnGUI () {
	ScoreMenu();
	if (fadeIn) {
		color.a = timer / fadeTime;
	} else {
		color.a = 1 - (timer / fadeTime);
	}
	GUI.color = color;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), blackScreen);
}

function Start () {
	highScore = PlayerPrefs.GetFloat("score");
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
public var smallMenu : GUIStyle = null;
public var normalMenu : GUIStyle = null;
public var largeMenu : GUIStyle = null;

public var loadingScene : String = null;

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
	GUI.Label(Rect(55, 200, Screen.width-155, 40), "Over the years, we have been watching you. Your campaigns of misinformation; suppression of dissent; your litigious nature, all of these things have caught our eye. With the leakage of your latest propaganda video into mainstream circulation, the extent of your malign influence over those who trust you, who call you leader, has been made clear to us. Anonymous has therefore decided that your organization should be destroyed. For the good of your followers, for the good of mankind--for the laughs--we shall expel you from the Internet and systematically dismantle the Church of Scientology in its present form. We acknowledge you as a serious opponent, and we are prepared for a long, long campaign. You will not prevail forever against the angry masses of the body politic. Your methods, hypocrisy, and the artlessness of your organization have sounded its death knell.", smallMenu);
	
	//layout end
	GUI.EndGroup();
}

function OnGUI () {
	InstructionsMenu();
	if (fadeIn) {
		color.a = timer / fadeTime;
	} else {
		color.a = 1 - (timer / fadeTime);
	}
	GUI.color = color;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), blackScreen);
}

function Start () {
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
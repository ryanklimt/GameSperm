public var loadingScene : String = null;

var blackScreen : Texture2D;
private var fadeIn : boolean = true;
private var fadeTime : float = 1;
private var color : Color = Color.black;
private var timer : float = 1;

function Start () {
	Screen.lockCursor = true;
}

function Update () {
	timer -= Time.deltaTime;
	if (timer <= 0) {
		timer = 0;
		if(loadingScene) {
			Application.LoadLevel(loadingScene);
		}
	}
	if (Input.GetKey(KeyCode.Escape)) {
		//FadeOut("MenuScene");
	}
}

function OnGUI () {
	if (fadeIn) {
		color.a = timer / fadeTime;
	} else {
		color.a = 1 - (timer / fadeTime);
	}
	GUI.color = color;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), blackScreen);
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
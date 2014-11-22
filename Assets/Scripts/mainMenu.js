public var normalMenu : GUIStyle = null;
public var largeMenu : GUIStyle = null;

function mainMenu() {
	//layout start
	GUI.BeginGroup(Rect(15, Screen.height/2 - 200, 300, 400));
	GUI.backgroundColor = Color.clear;
	
	//the menu background box
	GUI.Box(Rect(0, 0, 300, 400),"");
	
	//title
	GUI.Label(Rect(55, 55, 180, 40),"GameSperm", normalMenu);
	
	//main menu buttons
	if(GUI.Button(Rect(55, 110, 180, 75), "Play", largeMenu)) Application.LoadLevel("MainScene");
	if(GUI.Button(Rect(55, 200, 180, 40), "How", normalMenu)) Application.LoadLevel("InstructionsScene");
	if(GUI.Button(Rect(55, 245, 180, 40), "Score", normalMenu)) Application.LoadLevel("ScoreScene");
	if(GUI.Button(Rect(55, 290, 180, 40), "Exit", normalMenu)) Application.Quit(); //Application.LoadLevel("SecretScene");
	
	//layout end
	GUI.EndGroup();
}

function OnGUI () {
	mainMenu();
}
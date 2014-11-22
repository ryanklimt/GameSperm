function mainMenu() {
	//layout start
	GUI.BeginGroup(Rect(Screen.width / 2 - 150, 50, 300, 200));
	
	//the menu background box
	GUI.Box(Rect(0, 0, 300, 200),"");
	
	//title
	GUI.Label(Rect(115, 25, 300, 68),"GameSperm");
	
	//main menu buttons
	//game start button
	if(GUI.Button(Rect(55, 75, 180, 40), "Play")) {
		Application.LoadLevel("MainScene");
	}
	if(GUI.Button(Rect(55, 75, 180, 40), "How")) {
		Application.LoadLevel("InsturctionsScene");
	}
	if(GUI.Button(Rect(55, 75, 180, 40), "Score")) {
		Application.LoadLevel("ScoreScene");
	}
	if(GUI.Button(Rect(55, 130, 180, 40), "Exit")) {
		//Application.LoadLevel("SecretScene");
		Application.Quit();
	}
	
	//layout end
	GUI.EndGroup(); 
}

function OnGUI () {
	mainMenu();
}
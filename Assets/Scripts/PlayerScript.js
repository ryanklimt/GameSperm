#pragma strict

var highScore : float;
var currentTimer : float;
var hasWon : boolean = false;
var distanceToClickable : float = 2.5;
var possibleItems : String[];
var itemToCollect : String;

function Start () {
	possibleItems = Array("Statue");
	itemToCollect = possibleItems[0];
}

function Update () {
	if (!hasWon) {
		currentTimer += Time.deltaTime;
	}
	if (Input.GetMouseButtonUp(0)) {
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		if (Physics.Raycast(ray,hit,distanceToClickable)){
			if (hit.collider.gameObject.name == itemToCollect){
				hasWon = true;
				saveScore(currentTimer);
			}
		}
	}
}

function OnGUI () {
	GUI.Label(Rect(15, (Screen.height-35),200,35),"" + currentTimer);
	GUI.Label(Rect(15, (Screen.height-70),200,35),"" + itemToCollect);
}

function saveScore (score:float) {
	highScore = PlayerPrefs.GetFloat("score");
	if(highScore == 0 || highScore > score) {
		PlayerPrefs.SetFloat("score", score);
		PlayerPrefs.Save();
	}
}
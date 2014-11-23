#pragma strict

var highScore : int;
var currentItem : int;
var distanceToClickable : float = 2.5;
var possibleItems : String[];
var itemToCollect : String;

var hasWon : boolean = false;

function Start () {
	possibleItems = RandomizeArray(Array("HDTV", "Elf", "Statue", "Laptop", "Charizard", "Blue Charizard", "Dog", "Spider", "Football"));
	itemToCollect = possibleItems[0];
}

function Update () {
	if (Input.GetMouseButtonUp(0)) {
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		if (Physics.Raycast(ray,hit,distanceToClickable)){
			if (hit.collider.gameObject.name == itemToCollect){
				AI.speed += 0.75;
				currentItem += 1;
				audio.Play();
				saveScore(currentItem);
				if(currentItem >= 9) {
					hasWon = true;
				} else {
					itemToCollect = possibleItems[currentItem];
				}
			}
		}
	}
}

function OnGUI () {
	GUI.Label(Rect(15, (Screen.height-50),200,35),"Locate " + itemToCollect);
	GUI.Label(Rect(15, (Screen.height-30),200,35), currentItem + "/9");
}

function saveScore (score:float) {
	highScore = PlayerPrefs.GetFloat("score");
	if(score > highScore) {
		PlayerPrefs.SetFloat("score", score);
		PlayerPrefs.Save();
	}
}

static function RandomizeArray(arr : Array)
{
	for (var i = arr.length - 1; i > 0; i--) {
		var r = Random.Range(0,i);
		var tmp = arr[i];
		arr[i] = arr[r];
		arr[r] = tmp;
	}
	return arr;
}
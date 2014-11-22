#pragma strict

var menuAudio : AudioClip;
var mainAudio : AudioClip;

var currentScene : String;

function Start () {
	DontDestroyOnLoad(this.gameObject);
	if(GameObject.FindGameObjectsWithTag("Audio").Length > 1) {
		Destroy(this.gameObject);
	}
}

function Update () {
	if((Application.loadedLevelName == "MenuScene" && currentScene == "MainScene") || (Application.loadedLevelName == "MainScene" && currentScene == "MenuScene") || (Application.loadedLevelName == "MenuScene" && currentScene == "SecretScene") || (Application.loadedLevelName == "SecretScene" && currentScene == "MenuScene")) {
		currentScene = Application.loadedLevelName;
		changeAudio();
	}
	currentScene = Application.loadedLevelName;
}

function changeAudio () {
	audio.Stop();
	if(currentScene == "MainScene" || currentScene == "SecretScene") {
		audio.clip = mainAudio;
	} else {
		audio.clip = menuAudio;
	}
	audio.Play();
}
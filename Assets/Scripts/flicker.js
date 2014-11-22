private var timeOn = 0;
private var timeOff = 0;
private var changeTime = 0;

function Start () {

}

function Update() { 
	if (Time.time > changeTime) { 
		light.enabled = !light.enabled;
		timeOn = Random.Range(0.5, 1.0);
		timeOff = Random.Range(0, 1.5);
		if (light.enabled) {
			changeTime = Time.time + timeOn;
		} else {
			changeTime = Time.time + timeOff;
		}
	}
}
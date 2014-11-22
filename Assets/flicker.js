#pragma strict

	var min = 0.5;
	var max = 1.0;

function Start () {
	while (true) {
		yield WaitForSeconds(Random.Range (min, max));
		light.enabled = !light.enabled;
	}
}

function Update () {
	while (true) {
		yield WaitForSeconds(Random.Range (min, max));
		light.enabled = !light.enabled;
	}
}
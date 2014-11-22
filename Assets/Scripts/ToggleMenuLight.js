#pragma strict

private var timeOn = 0;
private var timeOff = 0;
private var changeTime = 0;

public var VMask : GameObject;
public var cam : GameObject;

function Start () {

}

function Update() { 
	if (Time.time > changeTime) { 
		light.enabled = !light.enabled;
		timeOn = Random.Range(0.1, 1.0);
		timeOff = Random.Range(0, 1.5);
		if (light.enabled) {
			changeTime = Time.time + timeOn;
			VMask.renderer.enabled = true;
			VMask.transform.position.x = Random.Range(0, 10.0);
			VMask.transform.LookAt(cam.transform);
		} else {
			changeTime = Time.time + timeOff;
			VMask.renderer.enabled = false;
		}
	}
}
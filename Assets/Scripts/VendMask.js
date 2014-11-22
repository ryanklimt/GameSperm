#pragma strict

function Start () {
	var speed = Random.Range(2.0,4.0);
	var pointA = transform.position;
	var pointB = transform.position;
	if (transform.eulerAngles.y >= 270) {
		pointB.x += 0.7;
	} else if(transform.eulerAngles.y >= 180) {
		pointB.z -= 0.7;
	} else if (transform.eulerAngles.y >= 90) {
		pointB.x += 0.7;
	} else if (transform.eulerAngles.y >= 0) {
		pointB.z += 0.7;
	}
	while (true) {
		yield MoveMask(transform, pointA, pointB, speed);
		yield MoveMask(transform, pointB, pointA, speed);
	}
}

function MoveMask (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) { 
	var i = 0.0;
	var rate = 1.0/time;
	while (i < 1.0) {
		i += Time.deltaTime * rate;
		thisTransform.position = Vector3.Lerp(startPos, endPos, i); yield;
	}
}
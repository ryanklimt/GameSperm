#pragma strict
var player : Transform;
static var speed : int = 2;
var isDead : boolean = false;

function Update () {
	var character = GetComponent(CharacterController);
	if(character.isGrounded) {
		var delta = player.transform.position - transform.position;
		delta.y = 0;
		delta.Normalize();
		transform.forward = delta;
		var moveSpeed = delta * speed;
	}
	moveSpeed.y -= 20.0 * Time.deltaTime;
	character.Move(moveSpeed * Time.deltaTime);
}

function OnCollisionEnter(col : Collision) {
	if(col.gameObject.tag == "Player" && !isDead) {
		isDead = true;
		Destroy(GameObject.Find("AudioPlayer"));
		audio.Play();
		var fpc : GameObject = GameObject.Find("First Person Controller");
		fpc.GetComponent(MouseLook).enabled = false;
		fpc.GetComponent(CharacterMotor).enabled = false;
		yield WaitForSeconds(3);
		var mc : GameObject = GameObject.Find("Main Camera");
		mc.GetComponent(PlayerGUI).FadeOut("MenuScene");
	}
}
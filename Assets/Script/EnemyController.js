#pragma strict

public var speed : float = 3;

function Start () {

}

function Update () {

}

function FindPlayer(player : GameObject) {
	var dir = player.transform.position - transform.position;
	transform.position = (transform.position +
		(dir.normalized * speed * Time.deltaTime));
	transform.LookAt(player.transform);
}

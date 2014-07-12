#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision) {
	if(collisionInfo.gameObject.tag == 'zombie') {
		collisionInfo.gameObject.SendMessage('ApplyDamage',SendMessageOptions.DontRequireReceiver);
	}
	Destroy(gameObject);
}
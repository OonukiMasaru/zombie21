#pragma strict

var ExplotionPrefab : GameObject;

function Start () {

}

function Update () {

}

function ApplyDamage() {
	Instantiate(ExplotionPrefab, transform.position, transform.rotation);
	Destroy(gameObject);
}
